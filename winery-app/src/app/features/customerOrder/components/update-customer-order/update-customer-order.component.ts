import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '../../../../shared/models/Store.model';
import { Customer } from '../../../../shared/models/Customer.model';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { StoreService } from '../../../store/service/store.service';
import { CustomerService } from '../../../customer/service/customer.service';
import { CustomerOrderService } from '../../service/customer-order.service';
import { CustomerOrderItemService } from '../../../customerOrderItem/service/customer-order-item.service';
import { AddCustomerComponent } from '../../../customer/components/add-customer/add-customer.component';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-update-customer-order',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule, RouterModule],
  templateUrl: './update-customer-order.component.html',
  styleUrl: './update-customer-order.component.css'
})
export class UpdateCustomerOrderComponent implements OnInit{

  customerOrderId: any;
  customerOrderForm: FormGroup;
  stores: Store[] = [];
  customers: Customer[] = [];

  totalCustomerOrderPrice: number | undefined;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private storeService: StoreService, private dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute, private customerOrderService: CustomerOrderService, private customerOrderItemService: CustomerOrderItemService){

    this.customerOrderForm = this.fb.group({
      id: [{value: '', disabled: true}],
      orderNumber: [{value: '', disabled: true}],
      expectedDeliveryDate: ['', Validators.required],
      timePlaced: ['', Validators.required],
      orderPrice: ['', Validators.required],
      customerId: ['', Validators.required],
      storeId: ['', Validators.required]
    });

    this.loadCustomers();
    this.loadStores();
  }

  ngOnInit(): void {
    this.customerOrderId = this.activatedRoute.snapshot.paramMap.get('customerOrderId');

    if(this.customerOrderId) {
      this.customerOrderId = Number(this.customerOrderId);

      this.customerOrderService.getCustomerOrderById(this.customerOrderId).subscribe((res) => {
        if(res) {
          this.customerOrderForm.patchValue({
            id: res.customerOrderId,
            orderNumber: res.orderNumber,
            expectedDeliveryDate: res.expectedDeliveryDate,
            timePlaced: res.timePlaced,
            orderPrice: res.orderPrice,
            customerId: res.customerDTO.customerId,
            storeId: res.storeDTO.storeId
          });

          this.calculateTotalPrice(this.customerOrderId);
        }
      });
    }
  }

  calculateTotalPrice(customerOrderId: number) {
    this.customerOrderItemService.getAllCustomerOrderItems().subscribe((customerOrderItems) => {
      const filteredItems = customerOrderItems.filter(item => item.customerOrderDTO.customerOrderId === customerOrderId);

      this.totalCustomerOrderPrice = filteredItems.reduce((total, item) => total + (item.orderPrice || 0), 0);
    });
  }

  loadStores() {
    this.storeService.getAllStores().subscribe((res) => {
      this.stores = res;
    });
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
    });
  }

  openAddCustomerDialog() {
    const addCustomer = this.dialog.open(AddCustomerComponent, {
      width: '500px'
    });

    addCustomer.afterClosed().subscribe((newCustomer) => {
      if (newCustomer) {
        this.customers.push(newCustomer);
        this.customerOrderForm.get('customerId')?.setValue(newCustomer.customerId);
      }
    });
  }

  onSubmit() {
    if(this.customerOrderForm.valid) {
      const updatedCustomerOrder: CustomerOrder = {
        customerOrderId: this.customerOrderId,
        orderNumber: this.customerOrderForm.get('orderNumber')?.value,
        expectedDeliveryDate: this.customerOrderForm.get('expectedDeliveryDate')?.value,
        timePlaced: this.customerOrderForm.get('timePlaced')?.value,
        orderPrice: this.customerOrderForm.get('orderPrice')?.value,
        storeDTO: {
          storeId: this.customerOrderForm.get('storeId')?.value
        },
        customerDTO: {
          customerId: this.customerOrderForm.get('customerId')?.value
        }
      };

      this.customerOrderService.updateCustomerOrder(updatedCustomerOrder).subscribe(() => {
        this.router.navigate(['/dashboard/customerOrder']);
      });
    }
  }
}
