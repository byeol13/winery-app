import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Country } from '../../../../shared/models/Country.model';
import { CountryService } from '../../service/country.service';
import { Router, RouterModule } from '@angular/router';
import { CountryDeleteComponent } from '../country-delete/country-delete.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CountryDeleteComponent, CommonModule, RouterModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit{

  countryIdToDelete: number | undefined;
  countries: Country[] = [];
  displayedColumns: string[] = ['id', 'country_name', 'actions'];
  showDeleteDialog = false;

  constructor(private countryService: CountryService, private router: Router){}
  
  ngOnInit(): void {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.countryService.getAllCountries().subscribe((res) => {
      this.countries = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/country`], {queryParams: {
      countryId: id
    }});
  }

  openDeleteDialog(id: number) {
    this.countryIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCountryById(id: number) {
    this.countryService.deleteCountryById(id).subscribe(() => {
      this.loadAllCountries();
      console.log(id);
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

}
