import { CityService } from './../../service/city.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { City } from '../../../../shared/models/City.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule, RouterModule, MatIconModule],
  templateUrl: './city-details.component.html',
  styleUrl: './city-details.component.css'
})
export class CityDetailsComponent implements OnInit{

  cityId: any;
  cities: City | undefined;
  displayedColumns: string[] = ['id', 'city_name', 'country_id', 'postal_code', 'actions'];

  constructor(private cityService: CityService, private activatedRoute: ActivatedRoute){
    this.cityId = activatedRoute.snapshot.queryParamMap.get('cityId');
  }

  ngOnInit(): void {
    this.loadCityById();
  }

  loadCityById() {
    if(this.cityId) {
      this.cityService.getCityById(this.cityId).subscribe((res) => {
        this.cities = res;
      })
    }
  }
}
