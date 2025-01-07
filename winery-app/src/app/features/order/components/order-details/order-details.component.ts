import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { Order } from '../../../../shared/models/Order.model';
import { OrderService } from '../../service/order.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { OrderItemService } from '../../../orderItem/service/order-item.service';
import { OrderItem } from '../../../../shared/models/OrderItem.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {

  orderId: any;
  orders: Order | undefined;
  displayedColumns: string[] = ['id', 'order_number', 'time_placed', 'order_price', 'supplier_id', 'store_id', 'employee_id', 'expected_delivery_date', 'time_delivered', 'time_canceled', 'actions'];

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute){
    this.orderId = activatedRoute.snapshot.queryParamMap.get('orderId');
  }

  ngOnInit(): void {
    this.loadOrderById();
  }

  loadOrderById() {
    if(this.orderId) {
      this.orderService.getOrderById(this.orderId).subscribe((res) => {
        this.orders = res;
      })
    }
  }
}