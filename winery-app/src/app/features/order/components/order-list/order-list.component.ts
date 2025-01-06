import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Order } from '../../../../shared/models/Order.model';
import { OrderService } from '../../service/order.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderDeleteComponent } from '../order-delete/order-delete.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, OrderDeleteComponent, RouterModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orderIdToDelete: number | undefined;
  orders: Order[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'time_placed', 'order_price', 'store_id', 'add-order-item', 'actions'];
  showDeleteDialog = false;

  constructor(private orderService: OrderService, private router: Router){}

  ngOnInit(): void {
    this.loadAllOrders();
  }

  loadAllOrders() {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orders = res;
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


  // orderIdToDelete: number | undefined;
  // orders: Order[] = [];
  // orderItems: OrderItem[] = [];
  // displayedColumns: string[] = [
  //   'id',
  //   'order_number',
  //   'time_placed',
  //   'order_price',
  //   'store_id',
  //   'actions',
  // ];
  // showDeleteDialog = false;

  // constructor(
  //   private orderService: OrderService,
  //   private orderItemService: OrderItemService,
  //   private router: Router
  // ) {}

  // ngOnInit(): void {
  //   this.loadAllOrders();
  //   this.loadAllOrderItems();
  // }

  // loadAllOrders() {
  //   this.orderService.getAllOrders().subscribe((res) => {
  //     this.orders = res;
  //     this.calculateOrderPrices();
  //   });
  // }

  // loadAllOrderItems() {
  //   this.orderItemService.getAllOrdedrItems().subscribe((res) => {
  //     this.orderItems = res;
  //     this.calculateOrderPrices();
  //   });
  // }

  // calculateOrderPrices() {
  //   if (this.orders.length && this.orderItems.length) {
  //     this.orders.forEach((order) => {
  //       const relatedItems = this.orderItems.filter(
  //         (item) => item.orderDTO.orderId === order.orderId
  //       );
  //       order.orderPrice = relatedItems.reduce(
  //         (total, item) => total + (item.orderPrice || 0),
  //         0
  //       );
  //     });
  //   }
  // }

  // viewDetails(id: number) {
  //   this.router.navigate(['/order'], { queryParams: { orderId: id } });
  // }

  // openDeleteDialog(id: number) {
  //   this.orderIdToDelete = id;
  //   this.showDeleteDialog = true;
  // }

  // deleteOrderById(id: number) {
  //   this.orderService.deleteOrderById(id).subscribe(() => {
  //     this.loadAllOrders();
  //     this.showDeleteDialog = false;
  //   });
  // }

  // cancel() {
  //   this.showDeleteDialog = false;
  // }

  // addOrderItem(orderId: any) {
  //   this.router.navigate(['/addOrderItem', orderId]);
  // }
}
