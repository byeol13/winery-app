import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Region } from '../../../../shared/models/Region.model';
import { RegionService } from '../../service/region.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegionDeleteComponent } from '../region-delete/region-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-region-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, RegionDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './region-list.component.html',
  styleUrl: './region-list.component.css'
})
export class RegionListComponent {

  regionIdToDelete: number | undefined;
  regions: Region[] = [];
  displayedColumns: string[] = ['id', 'region_name', 'country_id', 'actions'];
  showDeleteDialog = false;

  totalRegions: number = 0;
  displayedRegions: Region[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private regionService: RegionService, private router: Router){}

  ngOnInit(): void {
    this.loadAllRegions();
  }

  loadAllRegions() {
    this.regionService.getAllRegions().subscribe((res) => {
      this.regions = res;
      this.totalRegions = this.regions.length;
      this.paginatedRegions();
    })
  }

  openDeleteDialog(id: number) {
    this.regionIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteRegionById(id: number) {
    this.regionService.deleteRegionById(id).subscribe(() => {
      this.loadAllRegions();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  paginatedRegions() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedRegions = this.regions.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
