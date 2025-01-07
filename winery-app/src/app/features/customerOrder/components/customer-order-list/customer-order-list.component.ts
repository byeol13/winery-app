import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { CustomerOrderService } from '../../service/customer-order.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerOrderDeleteComponent } from '../customer-order-delete/customer-order-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, CustomerOrderDeleteComponent, RouterModule, MatPaginatorModule, MatPaginator],
  templateUrl: './customer-order-list.component.html',
  styleUrl: './customer-order-list.component.css'
})
export class CustomerOrderListComponent {
  
  customerOrderIdToDelete: number | undefined;
  customerOrders: CustomerOrder[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'order_price', 'customer_id', 'store_id', 'add-customer-order-item', 'actions'];
  showDeleteDialog = false;

  totalCustomerOrders: number = 0;
  displayedCustomerOrders: CustomerOrder[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private customerOrderService: CustomerOrderService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomerOrders();
  }

  loadAllCustomerOrders() {
    this.customerOrderService.getAllCustomerOrders().subscribe((res) => {
      this.customerOrders = res;
      this.totalCustomerOrders = this.customerOrders.length;
      this.paginatedCustomerOrders();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/customerOrder`], {queryParams: {customerOrderId: id}});
  }

  openDeleteDialog(id: number) {
    this.customerOrderIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCustomerOrderById(id: number) {
    this.customerOrderService.deleteCustomerOrderById(id).subscribe(() => {
      this.loadAllCustomerOrders();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  addCustomerOrderItem(customerOrderId: any) {
    this.router.navigate(['/addCustomerOrderItem', customerOrderId]);
  }

  paginatedCustomerOrders() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCustomerOrders = this.customerOrders.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}