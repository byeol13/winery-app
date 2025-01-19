import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CountryService } from '../../../country/service/country.service';
import { CityService } from '../../service/city.service';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../../../../shared/models/Country.model';
import { AddCountryComponent } from '../../../country/components/add-country/add-country.component';
import { City } from '../../../../shared/models/City.model';

@Component({
  selector: 'app-update-city',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, RouterModule, MatCardModule],
  templateUrl: './update-city.component.html',
  styleUrl: './update-city.component.css'
})
export class UpdateCityComponent implements OnInit{

  cityId: any;
  cityForm: FormGroup;
  countries: Country[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService, private activatedRoute: ActivatedRoute, private cityService: CityService, private router: Router, private dialog: MatDialog){

    this.cityForm = this.fb.group({
      id: [{value: '', disabled: true}],
      cityName: ['', Validators.required],
      postalCode: ['', Validators.required],
      countryId: ['', Validators.required]
    });

    this.loadCountries();
  }

  ngOnInit(): void {
    this.cityId = this.activatedRoute.snapshot.paramMap.get('cityId');

    if (this.cityId) {
      this.cityService.getCityById(this.cityId).subscribe((res) => {
        if (res) {
          this.cityForm.patchValue({
            id: res.cityId,
            cityName: res.cityName,
            postalCode: res.postalCode,
            countryId: res.countryDTO.countryId
          });
        }
      });
    }
  }

  loadCountries() {
    this.countryService.getAllCountries().subscribe((res) => {
      this.countries = res;
    })
  }

  openAddCountryDialog() {
    const addCountry = this.dialog.open(AddCountryComponent, {
      width: '500px'
    });

    addCountry.afterClosed().subscribe((newCountry) => {
      if (newCountry) {
        this.countries.push(newCountry);
        this.cityForm.get('countryId')?.setValue(newCountry.countryId);
      }
    });
  }

  onSubmit() {
    if(this.cityForm.valid) {
      const updatedCity: City = {
        cityId: this.cityId,
        cityName: this.cityForm.get('cityName')?.value,
        postalCode: this.cityForm.get('postalCode')?.value,
        countryDTO: {
          countryId: this.cityForm.get('countryId')?.value
        }
      };

      this.cityService.updateCity(updatedCity).subscribe(() => {
        this.router.navigate(['/dashboard/city']);
      });
    }
  }

}
