import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { Customer } from '../../../../shared/models/Customer.model';
import { Store } from '../../../../shared/models/Store.model';
import { Employee } from '../../../../shared/models/Employee.model';
import { Router } from '@angular/router';
import { InvoiceService } from '../../service/invoice.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '../../../employee/service/employee.service';
import { StoreService } from '../../../store/service/store.service';
import { CustomerService } from '../../../customer/service/customer.service';
import { CustomerOrderService } from '../../../customerOrder/service/customer-order.service';
import { AddInvoiceDialogComponent } from '../add-invoice-dialog/add-invoice-dialog.component';  

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent {

  invoiceForm: FormGroup;
  customers: Customer[] = [];
  customersOrder: CustomerOrder[] = [];
  stores: Store[] = [];
  employees: Employee[] = [];

  constructor(private fb: FormBuilder, private customerService: CustomerService, private customerOrderService: CustomerOrderService, private storeService: StoreService, private employeeService: EmployeeService, private dialog: MatDialog, private router: Router, private invoiceService: InvoiceService){

    this.invoiceForm = this.fb.group({
      invoiceNumber: ['', Validators.required],
      invoiceTotal: [{value: '', disabled: true}],
      customerId: [{value: '', disabled: true}],
      customerOrderId: ['', Validators.required],
      storeId: [{value: '', disabled: true}],
      employeeId: ['', Validators.required],
    });

    this.loadCustomers();
    this.loadCustomersOrder();
    this.loadStores();
    this.loadEmployees();

    this.onCustomerOrderChange();
  }

  loadCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
    });
  }

  loadCustomersOrder() {
    this.customerOrderService.getAllCustomerOrders().subscribe((res) => {
      this.customersOrder = res;
    })
  }

  loadStores() {
    this.storeService.getAllStores().subscribe((res) => {
      this.stores = res;
    });
  }

  loadEmployees() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.employees = res;
    });
  }

  onCustomerOrderChange() {
    this.invoiceForm.get('customerOrderId')?.valueChanges.subscribe((selectedOrderId) => {
      const selectedOrder = this.customersOrder.find(
        (customerOrder) => customerOrder.customerOrderId === selectedOrderId
      );
  
      if (selectedOrder) {
        if (selectedOrder.customerDTO) {
          this.invoiceForm.patchValue({ customerId: selectedOrder.customerDTO.customerId });
        }
  
        if (selectedOrder.storeDTO) {
          this.invoiceForm.patchValue({ storeId: selectedOrder.storeDTO.storeId });
        }
      }
    });
  }

  openConfirmationDialog() {
    if(this.invoiceForm.valid) {
      const addDialog = this.dialog.open(AddInvoiceDialogComponent, {
        width: '400px' 
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveInvoice();
        }
      });
    }
  }

  saveInvoice() {
    const newInvoice = {
      invoiceNumber: this.invoiceForm.get('invoiceNumber')?.value,
      invoiceTotal: this.invoiceForm.get('invoiceTotal')?.value,
      timeCreated: new Date(),
      customerDTO: {
        customerId: this.invoiceForm.get('customerId')?.value
      },
      customerOrderDTO: {
        customerOrderId: this.invoiceForm.get('customerOrderId')?.value
      },
      storeDTO: {
        storeId: this.invoiceForm.get('storeId')?.value
      },
      employeeDTO: {
        employeeId: this.invoiceForm.get('employeeId')?.value
      }
    };

    this.invoiceService.addInvoice(newInvoice).subscribe(() => {
      this.router.navigate(['/dashboard/invoice']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/invoice']);
  }
}
