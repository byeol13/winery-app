import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { CustomerOrderService } from '../../service/customer-order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomerOrderDeleteComponent } from '../customer-order-delete/customer-order-delete.component';

@Component({
  selector: 'app-customer-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, CustomerOrderDeleteComponent],
  templateUrl: './customer-order-list.component.html',
  styleUrl: './customer-order-list.component.css'
})
export class CustomerOrderListComponent {
  
  customerOrderIdToDelete: number | undefined;
  customerOrders: CustomerOrder[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'order_price', 'customer_id', 'store_id', 'actions'];
  showDeleteDialog = false;

  constructor(private customerOrderService: CustomerOrderService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomerOrders();
  }

  loadAllCustomerOrders() {
    this.customerOrderService.getAllCustomerOrders().subscribe((res) => {
      this.customerOrders = res;
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
}