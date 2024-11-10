import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Inventory } from '../../../../shared/models/Inventory.model';
import { InventoryService } from '../../service/inventory.service';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatButtonModule, MatTableModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent implements OnInit{

  inventories: Inventory[] = [];
  displayedColumns: string[] = ['id'];

  constructor(private inventoryService: InventoryService){}

  ngOnInit(): void {
    this.loadAllInventories();
  }

  loadAllInventories() {
    this.inventoryService.getAllInventories().subscribe((res) => {
      this.inventories = res;
    })
  }

}
