import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CountryService } from '../../../country/service/country.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RegionService } from '../../service/region.service';
import { Country } from '../../../../shared/models/Country.model';
import { AddCountryComponent } from '../../../country/components/add-country/add-country.component';
import { Region } from '../../../../shared/models/Region.model';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'app-update-region',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, RouterModule],
  templateUrl: './update-region.component.html',
  styleUrl: './update-region.component.css'
})
export class UpdateRegionComponent implements OnInit{

  regionId: any;
  regionForm: FormGroup;
  countries: Country[] = [];

  constructor(private fb: FormBuilder, private countryService: CountryService, private activatedRoute: ActivatedRoute, private regionService: RegionService, private dialog: MatDialog, private router: Router){

    this.regionForm = this.fb.group({
      id: [{value: '', disabled: true}],
      regionName: ['', Validators.required],
      countryId: ['', Validators.required]
    });

    this.loadCountries();
  }

  ngOnInit(): void {
    this.regionId = this.activatedRoute.snapshot.paramMap.get('regionId');

    if(this.regionId) {
      this.regionService.getRegionById(this.regionId).subscribe((res) => {
        if(res) {
          this.regionForm.patchValue({
            id: res.regionId,
            regionName: res.regionName,
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
        this.regionForm.get('countryId')?.setValue(newCountry.countryId);
      }
    });
  }

  onSubmit() {
    if(this.regionForm.valid) {
      const updatedRegion: Region = {
        regionId: this.regionId,
        regionName: this.regionForm.get('regionName')?.value,
        countryDTO: {
          countryId: this.regionForm.get('countryId')?.value
        }
      };

      this.regionService.updateRegion(updatedRegion).subscribe(() => {
        this.router.navigate(['/dashboard/region']);
      });
    }
  }

}
