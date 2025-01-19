import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrderItem } from '../../../../shared/models/CustomerOrderItem.model';
import { CustomerOrderItemService } from '../../service/customer-order-item.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerOrderItemDeleteComponent } from '../customer-order-item-delete/customer-order-item-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-order-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, CustomerOrderItemDeleteComponent, MatPaginatorModule, MatPaginator],
  templateUrl: './customer-order-item-list.component.html',
  styleUrl: './customer-order-item-list.component.css'
})
export class CustomerOrderItemListComponent implements OnInit{

  customerOrderItemIdToDelete: number | undefined;
  customerOrderItems: CustomerOrderItem[] = [];
  displayedColumns: string[] = ['id', 'customer_order_id', 'order_price', 'bottle_id', 'quantity', 'actions'];
  showDeleteDialog = false;

  totalCustomerOrderItems: number = 0;
  displayedCustomerOrderItems: CustomerOrderItem[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerOrderItemService: CustomerOrderItemService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomerOrderItems();
  }

  loadAllCustomerOrderItems() {
    this.customerOrderItemService.getAllCustomerOrderItems().subscribe((res) => {
      this.customerOrderItems = res;
      this.totalCustomerOrderItems = this.customerOrderItems.length;
      this.paginatedCustomerOrderItems();
    })
  }

  openDeleteDialog(id: number) {
    this.customerOrderItemIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCustomerOrderItemById(id: number) {
    const customerOrderItem = this.customerOrderItems.find(item => item.customerOrderItemId === id);
    const customerOrderId = customerOrderItem?.customerOrderDTO?.customerOrderId;

    if (!customerOrderId) {
      console.error('Unable to find associated customer order for the deleted invoice item.');
      return;
    }

    this.customerOrderItemService.deleteCustomerOrderItemById(id).subscribe(() => {
      this.loadAllCustomerOrderItems();
      this.showDeleteDialog = false;

      this.router.navigate(['/updateCustomerOrder', customerOrderId]);
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedCustomerOrderItems() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCustomerOrderItems = this.customerOrderItems.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
