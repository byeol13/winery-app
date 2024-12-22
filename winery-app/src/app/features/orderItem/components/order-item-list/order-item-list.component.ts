import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../../../../shared/models/OrderItem.model';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { OrderItemService } from '../../service/order-item.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderItemDeleteComponent } from '../order-item-delete/order-item-delete.component';

@Component({
  selector: 'app-order-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, OrderItemDeleteComponent],
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.css'
})
export class OrderItemListComponent implements OnInit{

  orderItemIdToDelete: number | undefined;
  orderItems: OrderItem[] = [];
  displayedColumns: string[] = ['id', 'order_id', 'order_price', 'actions'];
  showDeleteDialog = false;

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
    this.router.navigate([`/orderItem`], {queryParams: {orderItemId: id}});
  }

  openDeleteDialog(id: number) {
    this.orderItemIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteOrderItemById(id: number) {
    this.orderItemService.deleteOrderItemBbyId(id).subscribe(() => {
      this.loadAllOrderItems();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }
}
