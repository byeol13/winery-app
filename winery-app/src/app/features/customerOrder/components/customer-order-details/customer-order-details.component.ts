import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { CustomerOrderService } from '../../service/customer-order.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-order-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './customer-order-details.component.html',
  styleUrl: './customer-order-details.component.css'
})
export class CustomerOrderDetailsComponent implements OnInit{

  customerOrderId: any;
  customerOrders: CustomerOrder | undefined;
  displayedColumns: string[] = ['id', 'order_number', 'order_price', 'customer_id', 'customer_contact', 'store_id', 'expected_delivery_date', 'time_placed', 'actions'];

  constructor(private customerOrderService: CustomerOrderService, private activatedRoute: ActivatedRoute){
    this.customerOrderId = activatedRoute.snapshot.queryParamMap.get('customerOrderId');
  }

  ngOnInit(): void {
    this.loadCustomerOrderById();
  }

  loadCustomerOrderById() {
    if(this.customerOrderId) {
      this.customerOrderService.getCustomerOrderById(this.customerOrderId).subscribe((res) => {
        this.customerOrders = res;
      })
    }
  }
}
