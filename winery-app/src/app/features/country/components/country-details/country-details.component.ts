import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Country } from '../../../../shared/models/Country.model';
import { CountryService } from '../../service/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.css'
})
export class CountryDetailsComponent {

  countryId: any;
  countries: Country | undefined;
  displayedColumns: string[] = ['id', 'country_name'];

  constructor(private countryService: CountryService, private activatedRoute: ActivatedRoute){
    this.countryId = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadCountryById();
  }

  loadCountryById() {
    if(this.countryId) {
      this.countryService.getCountryById(this.countryId).subscribe((res) => {
        this.countries = res;
      })
    }
  }
}
