import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Country } from '../../../../shared/models/Country.model';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit{

  countries: Country[] = [];
  displayedColumns: string[] = ['id', 'country_name'];

  constructor(private countryService: CountryService){}
  
  ngOnInit(): void {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.countryService.getAllCountries().subscribe((res) => {
      this.countries = res;
    })
  }

}
