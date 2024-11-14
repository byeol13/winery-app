import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Order } from '../../../../shared/models/Order.model';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrderDeleteComponent } from '../order-delete/order-delete.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, OrderDeleteComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orderIdToDelete: number | undefined;
  orders: Order[] = [];
  displayedColumns: string[] = ['id', 'order_number', 'time_placed', 'order_price', 'actions'];
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
    this.router.navigate([`/order`, id]);
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

}
