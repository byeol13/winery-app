import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Region } from '../../../../shared/models/Region.model';
import { RegionService } from '../../service/region.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-region-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule],
  templateUrl: './region-details.component.html',
  styleUrl: './region-details.component.css'
})
export class RegionDetailsComponent implements OnInit{

  regionId: any;
  regions: Region | undefined;
  displayedColumns: string[] = ['id', 'region_name', 'country_id'];

  constructor(private regionService: RegionService, private activatedRoute: ActivatedRoute){
    this.regionId = activatedRoute.snapshot.queryParamMap.get('regionId');
  }

  ngOnInit(): void {
    this.loadRegionById();
  }

  loadRegionById() {
    if(this.regionId) {
      this.regionService.getRegionById(this.regionId).subscribe((res) => {
        this.regions = res;
      })
    }
  }

}
