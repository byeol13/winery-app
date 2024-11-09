import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrderItem } from '../../../../shared/models/CustomerOrderItem.model';
import { CustomerOrderItemService } from '../../service/customer-order-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-order-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule],
  templateUrl: './customer-order-item-list.component.html',
  styleUrl: './customer-order-item-list.component.css'
})
export class CustomerOrderItemListComponent implements OnInit{

  customerOrderItems: CustomerOrderItem[] = [];
  displayedColumns: string[] = ['id', 'order_price', 'actions'];

  constructor(private customerOrderItemService: CustomerOrderItemService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomerOrderItems();
  }

  loadAllCustomerOrderItems() {
    this.customerOrderItemService.getAllCustomerOrderItems().subscribe((res) => {
      this.customerOrderItems = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/customerOrderItem`, id]);
  }
}
