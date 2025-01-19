import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderItem } from '../../../../shared/models/OrderItem.model';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { OrderItemService } from '../../service/order-item.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderItemDeleteComponent } from '../order-item-delete/order-item-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-order-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, OrderItemDeleteComponent, RouterModule, MatPaginatorModule, MatPaginator],
  templateUrl: './order-item-list.component.html',
  styleUrl: './order-item-list.component.css'
})
export class OrderItemListComponent implements OnInit{

  orderItemIdToDelete: number | undefined;
  orderItems: OrderItem[] = [];
  displayedColumns: string[] = ['id', 'order_id', 'bottle_id', 'quantity', 'order_price', 'actions'];
  showDeleteDialog = false;

  totalOrderItems: number = 0;
  displayedOrderItems: OrderItem[] = [];

   @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private orderItemService: OrderItemService, private router: Router){}

  ngOnInit(): void {
    this.loadAllOrderItems();
  }

  loadAllOrderItems() {
    this.orderItemService.getAllOrdedrItems().subscribe((res) => {
      this.orderItems = res;
      this.totalOrderItems = this.orderItems.length;
      this.paginatedOrderItems();
    })
  }

  openDeleteDialog(id: number) {
    this.orderItemIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteOrderItemById(id: number) {
    const orderItem = this.orderItems.find(item => item.orderItemId === id);
    const orderId = orderItem?.orderDTO?.orderId;

    this.orderItemService.deleteOrderItemBbyId(id).subscribe(() => {
      this.loadAllOrderItems();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedOrderItems() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedOrderItems = this.orderItems.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
