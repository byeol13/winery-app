import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { BottleService } from '../../service/bottle.service';
import { Router, RouterModule } from '@angular/router';
import { BottleDeleteComponent } from '../bottle-delete/bottle-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-bottle-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatTableModule, BottleDeleteComponent, RouterModule, MatPaginatorModule, MatCardModule, MatIconModule],
  templateUrl: './bottle-list.component.html',
  styleUrl: './bottle-list.component.css'
})
export class BottleListComponent implements OnInit{

  bottleIdToDelete: number | undefined;
  bottles: Bottle[] = [];
  displayedColumns: string[] = ['id', 'full_name', 'label', 'category_id', 'year_produced', 'actions'];
  totalBottles: number = 0;
  displayedBottles: Bottle[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private bottleService: BottleService, private router: Router){}

  ngOnInit(): void {
    this.loadAllBottles();
  }

  loadAllBottles() {
    this.bottleService.getAllBottles().subscribe((res) => {
      this.bottles = res;
      this.totalBottles = this.bottles.length;
      this.paginatedBottles();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/bottle`], { queryParams: { bottleId: id}});
  }

  openDeleteDialog(id: number) {
    this.bottleIdToDelete = id;
  }

  deleteBottleById(id: number) {
    this.bottleService.deleteBottleById(id).subscribe(() => {
      console.log("deleteee", id);
      this.loadAllBottles();
      this.bottleIdToDelete = undefined;
    });
  }

  cancelDelete() {
    this.bottleIdToDelete = undefined;
  }

  paginatedBottles() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedBottles = this.bottles.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
