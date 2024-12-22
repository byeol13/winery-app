import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrderItem } from '../../../../shared/models/CustomerOrderItem.model';
import { CustomerOrderItemService } from '../../service/customer-order-item.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerOrderItemDeleteComponent } from '../customer-order-item-delete/customer-order-item-delete.component';

@Component({
  selector: 'app-customer-order-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, CustomerOrderItemDeleteComponent],
  templateUrl: './customer-order-item-list.component.html',
  styleUrl: './customer-order-item-list.component.css'
})
export class CustomerOrderItemListComponent implements OnInit{

  customerOrderItemIdToDelete: number | undefined;
  customerOrderItems: CustomerOrderItem[] = [];
  displayedColumns: string[] = ['id', 'customer_order_id', 'order_price', 'actions'];
  showDeleteDialog = false;

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
    this.router.navigate([`/customerOrderItem`], {queryParams: {customerOrderItemId: id}});
  }

  openDeleteDialog(id: number) {
    this.customerOrderItemIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCustomerOrderItemById(id: number) {
    this.customerOrderItemService.deleteCustomerOrderItemById(id).subscribe(() => {
      this.loadAllCustomerOrderItems();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }
}
