import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountryService } from '../../../country/service/country.service';
import { Country } from '../../../../shared/models/Country.model';
import { MatDialog } from '@angular/material/dialog';
import { AddCityDialogComponent } from '../add-city-dialog/add-city-dialog.component';
import { CityService } from '../../service/city.service';
import { Router } from '@angular/router';
import { AddCountryComponent } from '../../../country/components/add-country/add-country.component';

@Component({
  selector: 'app-add-city',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-city.component.html',
  styleUrl: './add-city.component.css'
})
export class AddCityComponent {

  cityForm: FormGroup;
  countries: Country[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService, private dialog: MatDialog, private cityService: CityService, private router: Router) {
    this.cityForm = this.fb.group({
      cityName: ['', Validators.required],
      postalCode: ['', Validators.required],
      countryId: ['', Validators.required]
    });

    this.loadCountries();
  }

  loadCountries() {
    this.countryService.getAllCountries().subscribe((res) => {
      this.countries = res;
    });
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

  openConfirmationDialog() {
    if (this.cityForm.valid) {
      const addDialog = this.dialog.open(AddCityDialogComponent, {
        width: '500px', height: '250px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res === 'confirm') {
          this.saveCity();
        }
      });
    }
  }

  saveCity() {
    const newCity = {
      cityName: this.cityForm.value.cityName,
      postalCode: this.cityForm.value.postalCode,
      countryDTO: {
        countryId: this.cityForm.value.countryId
      }
    };

    this.cityService.addCity(newCity).subscribe(() => {
      this.router.navigate(['/dashboard/city']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/city'])
  }
}
