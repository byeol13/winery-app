import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Inventory } from '../../../../shared/models/Inventory.model';
import { InventoryService } from '../../service/inventory.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InventoryDeleteComponent } from '../inventory-delete/inventory-delete.component';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatButtonModule, MatTableModule, CommonModule, InventoryDeleteComponent],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit{

  inventoryIdToDelete: number | undefined;
  inventories: Inventory[] = [];
  displayedColumns: string[] = ['id', 'store_id', 'bottle_id', 'actions'];
  showDeleteDialog = false;

  constructor(private inventoryService: InventoryService, private router: Router){}

  ngOnInit(): void {
    this.loadAllInventories();
  }

  loadAllInventories() {
    this.inventoryService.getAllInventories().subscribe((res) => {
      this.inventories = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/inventory`, id]);
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

}
