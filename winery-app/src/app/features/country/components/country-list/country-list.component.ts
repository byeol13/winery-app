import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Country } from '../../../../shared/models/Country.model';
import { CountryService } from '../../service/country.service';
import { Router, RouterModule } from '@angular/router';
import { CountryDeleteComponent } from '../country-delete/country-delete.component';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CountryDeleteComponent, CommonModule, RouterModule, MatPaginatorModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent implements OnInit{

  countryIdToDelete: number | undefined;
  countries: Country[] = [];
  displayedColumns: string[] = ['id', 'country_name', 'actions'];
  showDeleteDialog = false;
  totalCountries: number = 0;
  displayedCountries: Country[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private countryService: CountryService, private router: Router){}
  
  ngOnInit(): void {
    this.loadAllCountries();
  }

  loadAllCountries() {
    this.countryService.getAllCountries().subscribe((res) => {
      this.countries = res;
      this.totalCountries = this.countries.length;
      this.paginatedCountries();
    })
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

  paginatedCountries() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCountries = this.countries.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
