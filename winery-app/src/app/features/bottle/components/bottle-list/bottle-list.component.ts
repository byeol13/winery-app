import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { BottleService } from '../../service/bottle.service';
import { Router, RouterModule } from '@angular/router';
import { BottleDeleteComponent } from '../bottle-delete/bottle-delete.component';

@Component({
  selector: 'app-bottle-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatTableModule, BottleDeleteComponent, RouterModule],
  templateUrl: './bottle-list.component.html',
  styleUrl: './bottle-list.component.css'
})
export class BottleListComponent implements OnInit{

  bottleIdToDelete: number | undefined;
  bottles: Bottle[] = [];
  displayedColumns: string[] = ['id', 'full_name', 'label', 'category_id', 'year_produced', 'actions'];

  constructor(private bottleService: BottleService, private router: Router){}

  ngOnInit(): void {
    this.loadAllBottles();
  }

  loadAllBottles() {
    this.bottleService.getAllBottles().subscribe((res) => {
      this.bottles = res;
      console.log(this.bottles);
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
    })
  }

  cancelDelete() {
    this.bottleIdToDelete = undefined;
  }
}
