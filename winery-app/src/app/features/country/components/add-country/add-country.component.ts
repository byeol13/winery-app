import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-add-country',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css'
})
export class AddCountryComponent {

  countryForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private countryService: CountryService) {

    this.countryForm = this.fb.group({
      countryName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.countryService.addCountry(this.countryForm.value).subscribe(() => {
      this.router.navigate(['/dashboard/country']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/country']);
  }

}
