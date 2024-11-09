import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { CustomerOrderService } from '../../service/customer-order.service';

@Component({
  selector: 'app-customer-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './customer-order-list.component.html',
  styleUrl: './customer-order-list.component.css'
})
export class CustomerOrderListComponent {
  
  customerOrders: CustomerOrder[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'order_price'];

  constructor(private customerOrderService: CustomerOrderService){}

  ngOnInit(): void {
    this.loadAllCustomerOrders();
  }

  loadAllCustomerOrders() {
    this.customerOrderService.getAllCustomerOrders().subscribe((res) => {
      this.customerOrders = res;
    })
  }
}