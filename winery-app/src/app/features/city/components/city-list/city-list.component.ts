import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { City } from '../../../../shared/models/City.model';
import { CityService } from '../../service/city.service';
import { Router, RouterModule } from '@angular/router';
import { CityDeleteComponent } from '../city-delete/city-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, MatToolbarModule, CityDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit{

  cityToDeleteId: number | undefined;
  cities: City[] = [];
  displayedColumns: string[] = ['id', 'city_name', 'country_id', 'postal_code', 'actions'];
  showDeleteDialog = false;
  totalCities: number = 0;
  displayedCities: City[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cityService: CityService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCities();
  }

  loadAllCities() {
    this.cityService.getAllCities().subscribe((res) => {
      this.cities = res;
      this.totalCities = this.cities.length;
      this.paginatedCities();
    });
  }

  openDeleteDialog(id: number) {
    this.cityToDeleteId = id;
    this.showDeleteDialog = true;
  }

  deleteCityById(id: number) {
    this.cityService.deleteCityById(id).subscribe(() => {
      this.loadAllCities();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedCities() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCities = this.cities.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
