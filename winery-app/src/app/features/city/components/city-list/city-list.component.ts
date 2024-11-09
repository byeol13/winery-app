import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { City } from '../../../../shared/models/City.model';
import { CityService } from '../../service/city.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatTableModule, MatToolbarModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent implements OnInit{

  cities: City[] = [];
  displayedColumns: string[] = ['id', 'city_name', 'postal_code', 'actions'];

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
    this.router.navigate([`/city`, id]);
  }

}
