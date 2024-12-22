import { Component } from '@angular/core';
import { OrderItem } from '../../../../shared/models/OrderItem.model';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { OrderItemService } from '../../service/order-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-item-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './order-item-details.component.html',
  styleUrl: './order-item-details.component.css'
})
export class OrderItemDetailsComponent {

  orderItemId: any;
  orderItems: OrderItem | undefined;
  displayedColumns: string[] = ['id', 'order_id', 'bottle_id', 'quantity', 'order_price'];

  constructor(private orderItemService: OrderItemService, private activatedROute: ActivatedRoute){
    this.orderItemId = activatedROute.snapshot.queryParamMap.get('orderItemId');
  }

  ngOnInit(): void {
    this.loadOrderItemById();
  }

  loadOrderItemById() {
    if(this.orderItemId) {
      this.orderItemService.getOrderItemById(this.orderItemId).subscribe((res) => {
        this.orderItems = res;
      })
    }
  }

}
