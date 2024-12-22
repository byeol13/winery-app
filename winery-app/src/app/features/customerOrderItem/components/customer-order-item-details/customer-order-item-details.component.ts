import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CustomerOrderItem } from '../../../../shared/models/CustomerOrderItem.model';
import { CustomerOrderItemService } from '../../service/customer-order-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-order-item-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule],
  templateUrl: './customer-order-item-details.component.html',
  styleUrl: './customer-order-item-details.component.css'
})
export class CustomerOrderItemDetailsComponent implements OnInit{

  customerOrderItemId: any;
  customerOrderItems: CustomerOrderItem | undefined;
  displayedColumns: string[] = ['id', 'customer_order_id', 'bottle_id', 'quantity', 'order_price'];

  constructor(private customerOrderItemService: CustomerOrderItemService, private activatedRoute: ActivatedRoute){
    this.customerOrderItemId = activatedRoute.snapshot.queryParamMap.get('customerOrderItemId');
  }

  ngOnInit(): void {
    this.loadCustomerOrderItemById();
  }

  loadCustomerOrderItemById() {
    if(this.customerOrderItemId) {
      this.customerOrderItemService.getCustomerOrderItemById(this.customerOrderItemId).subscribe((res) => {
        this.customerOrderItems = res;
      })
    }
  }

}
