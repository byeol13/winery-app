import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Store } from '../../../../shared/models/Store.model';
import { StoreService } from '../../service/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule],
  templateUrl: './store-details.component.html',
  styleUrl: './store-details.component.css'
})
export class StoreDetailsComponent implements OnInit{

  storeId: any;
  stores: Store | undefined;
  displayedColumns: string[] = ['id', 'store_name', 'address', 'phone', 'mobile', 'email', 'details'];

  constructor(private storeService: StoreService, private activatedRoute: ActivatedRoute){
    this.storeId = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadStoreById();
  }

  loadStoreById() {
    if(this.storeId) {
      this.storeService.getStoreById(this.storeId).subscribe((res) => {
        this.stores = res;
      })
    }
  }

}
