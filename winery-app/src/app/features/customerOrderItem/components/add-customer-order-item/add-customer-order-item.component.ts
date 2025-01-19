import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { BottleService } from '../../../bottle/service/bottle.service';
import { CustomerOrderItemService } from '../../service/customer-order-item.service';
import { CustomerOrderService } from '../../../customerOrder/service/customer-order.service';
import { AddCustomerOrderItemDialogComponent } from '../add-customer-order-item-dialog/add-customer-order-item-dialog.component';

@Component({
  selector: 'app-add-customer-order-item',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './add-customer-order-item.component.html',
  styleUrl: './add-customer-order-item.component.css'
})
export class AddCustomerOrderItemComponent implements OnInit{

  customerOrderId: any;
  customerOrderItemForm: FormGroup;
  bottles: Bottle[] = []; 
  customerOrders: CustomerOrder[] = []; 
  orderPrice: number = 0;
  orderNumber: string = '';

  constructor(private fb: FormBuilder, private bottleService: BottleService, private customerOrderService: CustomerOrderService, private router: Router, private dialog: MatDialog, private customerOrderItemService: CustomerOrderItemService, private activatedRoute: ActivatedRoute){

    this.customerOrderItemForm = this.fb.group({
      bottleId: ['', Validators.required],
      customerOrderId: ['', Validators.required],
      quantity: ['', Validators.required],
      orderPrice: [{ value: '', disabled: true }]
    });

    this.loadBottles();
    this.loadCustomerOrders();
  }

  ngOnInit(): void {
    this.customerOrderId = this.activatedRoute.snapshot.paramMap.get('customerOrderId') || '';

    this.customerOrderService.getCustomerOrderById(this.customerOrderId).subscribe((customerOrder: CustomerOrder) => {
      if (customerOrder) {
        this.orderNumber = customerOrder.orderNumber;
        this.customerOrderItemForm.patchValue({
          customerOrderId: this.customerOrderId,
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

  loadCustomerOrders() {
    this.customerOrderService.getAllCustomerOrders().subscribe((res) => {
      this.customerOrders = res;
    });
  }

  onBottleChange() {
    this.calculatePrice();
  }

  onQuantityChange() {
    this.calculatePrice();
  }

  calculatePrice() {
    const bottleId = this.customerOrderItemForm.get('bottleId')?.value;
    const quantity = this.customerOrderItemForm.get('quantity')?.value;

    const selectedBottle = this.bottles.find(bottle => bottle.bottleId === bottleId);

    if (selectedBottle && quantity) {
      this.orderPrice = selectedBottle.currentPrice * quantity;
      this.customerOrderItemForm.patchValue({
        orderPrice: this.orderPrice
      });
    }
  }

  openConfirmationDialog() {
    if(this.customerOrderItemForm.valid) {
      const addDialog = this.dialog.open(AddCustomerOrderItemDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res === 'confirm') {
          this.saveCustomerOrderItem();
        }
      });
    }
  }

  saveCustomerOrderItem() {
    const newCustomerOrderItem = {
      bottleDTO: {
        bottleId: this.customerOrderItemForm.get('bottleId')?.value
      },
      customerOrderDTO: {
        customerOrderId: this.customerOrderItemForm.get('customerOrderId')?.value
      },
      quantity: this.customerOrderItemForm.get('quantity')?.value,
      orderPrice: this.customerOrderItemForm.get('orderPrice')?.value
    };

    this.customerOrderItemService.addCustomerOrderItem(newCustomerOrderItem).subscribe(() => {
      this.router.navigate(['/updateCustomerOrder', newCustomerOrderItem.customerOrderDTO.customerOrderId]);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard/customerOrder']);
  }
}
