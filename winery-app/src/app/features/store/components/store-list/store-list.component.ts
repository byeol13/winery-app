import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Store } from '../../../../shared/models/Store.model';
import { StoreService } from '../../service/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule],
  templateUrl: './store-list.component.html',
  styleUrl: './store-list.component.css'
})
export class StoreListComponent implements OnInit{

  stores: Store[] = [];
  displayedColumns: string[] = ['id', 'store_name', 'address', 'actions'];

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
    this.router.navigate([`/store`, id]);
  }

}
