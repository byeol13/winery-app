import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Region } from '../../../../shared/models/Region.model';
import { RegionService } from '../../service/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-region-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './region-list.component.html',
  styleUrl: './region-list.component.css'
})
export class RegionListComponent {

  regions: Region[] = [];
  displayedColumns: string[] = ['id', 'region_name', 'actions'];

  constructor(private regionService: RegionService, private router: Router){}

  ngOnInit(): void {
    this.loadAllRegions();
  }

  loadAllRegions() {
    this.regionService.getAllRegions().subscribe((res) => {
      this.regions = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/region`, id]);
  }

}
