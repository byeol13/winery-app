import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { City } from '../../../../shared/models/City.model';
import { CityService } from '../../service/city.service';
import { Router, RouterModule } from '@angular/router';
import { CityDeleteComponent } from '../city-delete/city-delete.component';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, MatToolbarModule, CityDeleteComponent, RouterModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit{

  cityToDeleteId: number | undefined;
  cities: City[] = [];
  displayedColumns: string[] = ['id', 'city_name', 'country_id', 'actions'];
  showDeleteDialog = false;

  constructor(private cityService: CityService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCities();
  }

  loadAllCities() {
    this.cityService.getAllCities().subscribe((res) => {
      this.cities = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/city`], {queryParams: { cityId: id}});
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

}
