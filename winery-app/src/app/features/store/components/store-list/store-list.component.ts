import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Store } from '../../../../shared/models/Store.model';
import { StoreService } from '../../service/store.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreDeleteComponent } from '../store-delete/store-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, StoreDeleteComponent, RouterModule, MatPaginatorModule, MatPaginator],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.css'
})
export class StoreListComponent implements OnInit{

  storeIdToDelete: number | undefined;
  stores: Store[] = [];
  displayedColumns: string[] = ['id', 'store_name', 'address', 'city_id', 'actions'];
  showDeleteDialog = false;

  totalStores: number = 0;
  displayedStores: Store[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private storeService: StoreService, private router: Router){}

  ngOnInit(): void {
    this.loadAllStores();
  }

  loadAllStores() {
    this.storeService.getAllStores().subscribe((res) => {
      this.stores = res;  
      this.totalStores = this.stores.length;
      this.paginatedStores();
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

  paginatedStores() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedStores = this.stores.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
