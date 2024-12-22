import { Inventory } from './../../../../shared/models/Inventory.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InventoryService } from '../../service/inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule],
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.css'
})
export class InventoryDetailsComponent implements OnInit{

  inventoryId: any;
  inventories: Inventory | undefined;
  displayedColumns: string[] = ['id', 'store_id', 'bottle_id', 'quantity'];

  constructor(private inventoryService: InventoryService, private activatedRoute: ActivatedRoute){
    this.inventoryId = activatedRoute.snapshot.queryParamMap.get('inventoryId');
  }

  ngOnInit(): void {
    this.loadInventoryById();
  }

  loadInventoryById() {
    if(this.inventoryId) {
      this.inventoryService.getInventoryById(this.inventoryId).subscribe((res) => {
        this.inventories = res;
      })
    }
  }
}
