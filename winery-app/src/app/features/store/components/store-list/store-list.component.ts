import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Store } from '../../../../shared/models/Store.model';
import { StoreService } from '../../service/store.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreDeleteComponent } from '../store-delete/store-delete.component';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, StoreDeleteComponent],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.css'
})
export class StoreListComponent implements OnInit{

  storeIdToDelete: number | undefined;
  stores: Store[] = [];
  displayedColumns: string[] = ['id', 'store_name', 'address', 'city_id', 'actions'];
  showDeleteDialog = false;

  constructor(private storeService: StoreService, private router: Router){}

  ngOnInit(): void {
    this.loadAllStores();
  }

  loadAllStores() {
    this.storeService.getAllStores().subscribe((res) => {
      this.stores = res;  
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/store`], {queryParams: {storeId: id}});
  }

  openDeleteDialog(id: number) {
    this.storeIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteStoreById(id: number) {
    this.storeService.deleteStoreById(id).subscribe(() => {
      this.loadAllStores();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

}
