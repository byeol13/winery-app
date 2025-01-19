import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { StoreService } from '../../../store/service/store.service';
import { CustomerService } from '../../../customer/service/customer.service';
import { Store } from '../../../../shared/models/Store.model';
import { Customer } from '../../../../shared/models/Customer.model';
import { AddCustomerOrderDialogComponent } from '../add-customer-order-dialog/add-customer-order-dialog.component';
import { CustomerOrderService } from '../../service/customer-order.service';
import { AddCustomerComponent } from '../../../customer/components/add-customer/add-customer.component';

@Component({
  selector: 'app-add-customer-order',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './add-customer-order.component.html',
  styleUrl: './add-customer-order.component.css'
})
export class AddCustomerOrderComponent {

  customerOrderForm: FormGroup;
  stores: Store[] = [];
  customers: Customer[] = [];

  constructor(private fb: FormBuilder, private customerService: CustomerService, private storeService: StoreService, private dialog: MatDialog, private router: Router, private customerOrderService: CustomerOrderService){

    this.customerOrderForm = this.fb.group({
      orderNumber: ['', Validators.required],
      expectedDeliveryDate: ['', Validators.required],
      timePlaced: ['', Validators.required],
      orderPrice: [{value: '', disabled: true}],
      customerId: ['', Validators.required],
      storeId: ['', Validators.required]
    });

    this.loadStores();
    this.loadCustomers();
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

  openConfirmationDialog() {
    if(this.customerOrderForm.valid) {
      const addDialog = this.dialog.open(AddCustomerOrderDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveCustomerOrder();
        }
      });
    }
  }

  saveCustomerOrder() {
    const newCustomerOrder = {
      orderNumber: this.customerOrderForm.get('orderNumber')?.value,
      expectedDeliveryDate: this.customerOrderForm.get('expectedDeliveryDate')?.value,
      timePlaced: this.customerOrderForm.get('timePlaced')?.value,
      orderPrice: this.customerOrderForm.get('orderPrice')?.value,
      customerDTO: {
        customerId: this.customerOrderForm.get('customerId')?.value,
      },
      storeDTO: {
        storeId: this.customerOrderForm.get('storeId')?.value,
      }
    };

    this.customerOrderService.addCustomerOrder(newCustomerOrder).subscribe(() => {
      this.router.navigate(['/dashboard/customerOrder']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/customerOrder']);
  }
}
