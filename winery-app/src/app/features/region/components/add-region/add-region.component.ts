import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Country } from '../../../../shared/models/Country.model';
import { CountryService } from '../../../country/service/country.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegionService } from '../../service/region.service';
import { Router } from '@angular/router';
import { AddCountryComponent } from '../../../country/components/add-country/add-country.component';
import { AddRegionDialogComponent } from '../add-region-dialog/add-region-dialog.component';

@Component({
  selector: 'app-add-region',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-region.component.html',
  styleUrl: './add-region.component.css'
})
export class AddRegionComponent {

  regionForm: FormGroup;
  countries: Country[] = [];
  isDialog: boolean;

  constructor(private fb: FormBuilder, private countryService: CountryService, private dialog: MatDialog, private regionService: RegionService, private router: Router, @Optional() private dialogRef: MatDialogRef<AddRegionComponent>) {
    this.isDialog = !!dialogRef;

    this.regionForm = this.fb.group({
      regionName: ['', Validators.required],
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
        this.regionForm.get('countryId')?.setValue(newCountry.countryId);
      }
    });
  }

  openConfirmationDialog() {
    if(this.regionForm.valid) {
      const addDialog = this.dialog.open(AddRegionDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveRegion();
        }
      });
    }
  }

  saveRegion() {
    const newRegion = {
      regionName: this.regionForm.get('regionName')?.value,
      countryDTO: {
      countryId: this.regionForm.get('countryId')?.value
      }
    };

    this.regionService.addRegion(newRegion).subscribe((newRegion) => {
      if(this.dialogRef) {
        this.dialogRef.close(newRegion);
      } else {
        this.router.navigate(['/dashboard/region']);
      }
    });
  }

  goBack() {
    if(this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/dashboard/region']);
    }
  }

}
