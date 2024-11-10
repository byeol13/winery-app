import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Order } from '../../../../shared/models/Order.model';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orders: Order[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'time_placed', 'order_price'];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders() {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orders = res;
    })
  }

}
