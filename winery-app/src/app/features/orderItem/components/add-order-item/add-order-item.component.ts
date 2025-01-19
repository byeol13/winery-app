import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { Order } from '../../../../shared/models/Order.model';
import { BottleService } from '../../../bottle/service/bottle.service';
import { OrderService } from '../../../order/service/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddInventoryDialogComponent } from '../../../inventory/components/add-inventory-dialog/add-inventory-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrderItemService } from '../../service/order-item.service';

@Component({
  selector: 'app-add-order-item',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-order-item.component.html',
  styleUrl: './add-order-item.component.css'
})
export class AddOrderItemComponent implements OnInit{

  orderId: any;
  orderItemForm: FormGroup;
  bottles: Bottle[] = []; 
  orders: Order[] = []; 
  orderPrice: number = 0;
  orderNumber: string = '';

  constructor(private fb: FormBuilder, private bottleService: BottleService, private orderService: OrderService, private router: Router, private dialog: MatDialog, private orderItemService: OrderItemService, private activatedRoute: ActivatedRoute) {
    this.orderItemForm = this.fb.group({
      bottleId: ['', Validators.required],
      orderId: ['', Validators.required],
      quantity: ['', Validators.required],
      orderPrice: [{ value: '', disabled: true }]
    });

    this.loadBottles();
    this.loadOrders();
  }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId') || '';
    
    this.orderService.getOrderById(this.orderId).subscribe((order: Order) => {
      if (order) {
        this.orderNumber = order.orderNumber; 
        this.orderItemForm.patchValue({
          orderId: this.orderId, 
          orderPrice: 0 
        });
      }
    });
  }

  loadBottles() {
    this.bottleService.getAllBottles().subscribe((res) => {
      this.bottles = res;
    });
  }

  loadOrders() {
    this.orderService.getAllOrders().subscribe((res) => {
      this.orders = res;
    });
  }

  onBottleChange() {
    this.calculatePrice();
  }

  onQuantityChange() {
    this.calculatePrice();
  }

  calculatePrice() {
    const bottleId = this.orderItemForm.get('bottleId')?.value;
    const quantity = this.orderItemForm.get('quantity')?.value;

    const selectedBottle = this.bottles.find(bottle => bottle.bottleId === bottleId);

    if (selectedBottle && quantity) {
      this.orderPrice = selectedBottle.currentPrice * quantity;
      this.orderItemForm.patchValue({
        orderPrice: this.orderPrice
      });
    }
  }

  openConfirmationDialog() {
    if (this.orderItemForm.valid) {
      const addDialog = this.dialog.open(AddInventoryDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveOrderItem();
        }
      });
    }
  }

  saveOrderItem() {
    const newOrderItem = {
      bottleDTO: {
        bottleId: this.orderItemForm.get('bottleId')?.value
      },
      orderDTO: {
        orderId: this.orderItemForm.get('orderId')?.value
      },
      quantity: this.orderItemForm.get('quantity')?.value,
      orderPrice: this.orderItemForm.get('orderPrice')?.value
    };

    this.orderItemService.addOrderItem(newOrderItem).subscribe(() => {
      this.router.navigate(['/updateOrder', newOrderItem.orderDTO.orderId]);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard/order']);
  }

}
