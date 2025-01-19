import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CountryService } from '../../service/country.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCountryDialogComponent } from '../add-country-dialog/add-country-dialog.component';

@Component({
  selector: 'app-add-country',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css'
})
export class AddCountryComponent {

  countryForm: FormGroup;
  isDialog: boolean;

  constructor(private fb: FormBuilder, private router: Router, private countryService: CountryService, private dialog: MatDialog, @Optional() private dialogRef: MatDialogRef<AddCountryComponent>) {

    this.isDialog = !!dialogRef;

    this.countryForm = this.fb.group({
      countryName: ['', Validators.required]
    });
  }

  openConfirmationDialog() {
    if (this.countryForm.valid) {
      const addDialog = this.dialog.open(AddCountryDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveCountry();
        }
      });
    }
  }

  saveCountry() {
    this.countryService.addCountry(this.countryForm.value).subscribe((newCountry) => {
      if(this.dialogRef) {
        this.dialogRef.close(newCountry);
      } else {
        this.router.navigate(['/dashboard/country']);
      }
    });
  }

  goBack() {
    if(this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/dashboard/country']);
    }
  }

}
