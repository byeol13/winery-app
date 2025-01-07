import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Order } from '../../../../shared/models/Order.model';
import { OrderService } from '../../service/order.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderDeleteComponent } from '../order-delete/order-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, OrderDeleteComponent, RouterModule, MatPaginator, MatPaginatorModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orderIdToDelete: number | undefined;
  orders: Order[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'time_placed', 'order_price', 'store_id', 'add-order-item', 'actions'];
  showDeleteDialog = false;

  totalOrders: number = 0;
  displayedOrders: Order[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private orderService: OrderService, private router: Router){}

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders() {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orders = res;
      this.totalOrders = this.orders.length;
      this.paginatedOrders();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/order`], {queryParams: {orderId: id}});
  }

  openDeleteDialog(id: number) {
    this.orderIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteOrderById(id: number) {
    this.orderService.deleteOrderById(id).subscribe(() => {
      this.loadAllOrders();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  addOrderItem(orderId: any) {
    this.router.navigate(['/addOrderItem', orderId]);
  }

  paginatedOrders() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedOrders = this.orders.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
