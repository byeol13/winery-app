import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../../../shared/models/OrderItem.model';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { OrderItemService } from '../../service/order-item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule],
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.css'
})
export class OrderItemListComponent implements OnInit{

  orderItems: OrderItem[] = [];
  displayedColumns: string[] = ['id', 'quantity', 'order_price', 'actions'];

  constructor(private orderItemService: OrderItemService, private router: Router){}

  ngOnInit(): void {
    this.loadAllOrderItems();
  }

  loadAllOrderItems() {
    this.orderItemService.getAllOrdedrItems().subscribe((res) => {
      this.orderItems = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/orderItem`, id]);
  }
}
