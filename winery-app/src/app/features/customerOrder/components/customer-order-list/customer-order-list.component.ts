import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { CustomerOrderService } from '../../service/customer-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './customer-order-list.component.html',
  styleUrl: './customer-order-list.component.css'
})
export class CustomerOrderListComponent {
  
  customerOrders: CustomerOrder[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'order_price', 'actions'];

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
    this.router.navigate([`/customerOrder`, id]);
  }
}