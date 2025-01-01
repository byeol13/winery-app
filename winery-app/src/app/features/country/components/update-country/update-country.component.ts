import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CountryService } from '../../service/country.service';
import { Country } from '../../../../shared/models/Country.model';

@Component({
  selector: 'app-update-country',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatCardContent, ReactiveFormsModule, RouterModule],
  templateUrl: './update-country.component.html',
  styleUrl: './update-country.component.css'
})
export class UpdateCountryComponent implements OnInit{

  countryId: any;
  countryForm: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private countryService: CountryService, private router: Router) {
    this.countryForm = this.fb.group({
      id: [{value: '', disabled: true}],
      countryName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.countryId = this.activatedRoute.snapshot.paramMap.get('countryId');

    if(this.countryId) {
      this.countryService.getCountryById(this.countryId).subscribe((res) => {
        if (res) {
          this.countryForm.patchValue(
            {
              id: res.countryId,
              countryName: res.countryName
            });
        }
      });
    }
  }

  onSubmit() {
    if (this.countryForm.valid) {
      const updatedCountry: Country = {
        countryId: this.countryId,
        countryName: this.countryForm.get('countryName')?.value
      };

      this.countryService.updateCountry(updatedCountry).subscribe(() => {
        this.router.navigate(['/dashboard/country']);
      })
    }
  }
}
