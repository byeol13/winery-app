import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Inventory } from '../../../../shared/models/Inventory.model';
import { InventoryService } from '../../service/inventory.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InventoryDeleteComponent } from '../inventory-delete/inventory-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatButtonModule, MatTableModule, CommonModule, InventoryDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit{

  inventoryIdToDelete: number | undefined;
  inventories: Inventory[] = [];
  displayedColumns: string[] = ['id', 'store_id', 'bottle_id', 'quantity', 'actions'];
  showDeleteDialog = false;

  totalInventories: number = 0;
  displayedInventories: Inventory[] = [];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private inventoryService: InventoryService, private router: Router){}

  ngOnInit(): void {
    this.loadAllInventories();
  }

  loadAllInventories() {
    this.inventoryService.getAllInventories().subscribe((res) => {
      this.inventories = res;
      this.totalInventories = this.inventories.length;
      this.paginatedInventories();
    })
  }

  openDeleteDialog(id: number) {
    this.inventoryIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteInventoryById(id: number) {
    this.inventoryService.deleteInventoryById(id).subscribe(() => {
      this.loadAllInventories();
      this.showDeleteDialog = false;
    })
  }
  
  cancel() {
    this.showDeleteDialog = false;
  }

  paginatedInventories() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedInventories = this.inventories.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
