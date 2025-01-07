import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Customer } from '../../../../shared/models/Customer.model';
import { CustomerOrder } from '../../../../shared/models/CustomerOrder.model';
import { Employee } from '../../../../shared/models/Employee.model';
import { Store } from '../../../../shared/models/Store.model';
import { CustomerService } from '../../../customer/service/customer.service';
import { CustomerOrderService } from '../../../customerOrder/service/customer-order.service';
import { EmployeeService } from '../../../employee/service/employee.service';
import { StoreService } from '../../../store/service/store.service';
import { InvoiceService } from '../../service/invoice.service';
import { Invoice } from '../../../../shared/models/Invoice.model';
import { InvoiceItemService } from '../../../invoiceItem/service/invoice-item.service';

@Component({
  selector: 'app-update-invoice',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule, RouterModule],
  templateUrl: './update-invoice.component.html',
  styleUrl: './update-invoice.component.css'
})
export class UpdateInvoiceComponent implements OnInit{

  invoiceId: any;
  invoiceForm: FormGroup;
  customers: Customer[] = [];
  customersOrder: CustomerOrder[] = [];
  stores: Store[] = [];
  employees: Employee[] = [];

  totalInvoicePrice: number | undefined;

  constructor(private fb: FormBuilder, private customerService: CustomerService, private customerOrderService: CustomerOrderService, private storeService: StoreService, private employeeService: EmployeeService, private router: Router, private invoiceService: InvoiceService, private activatedRoute: ActivatedRoute, private invoiceItemService: InvoiceItemService){

    this.invoiceForm = this.fb.group({
      id: [{value: '', disabled: true}],
      invoiceNumber: [{value: '', disabled: true}],
      invoiceTotal: ['', Validators.required],
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

  ngOnInit(): void {
    this.invoiceId = this.activatedRoute.snapshot.paramMap.get('invoiceId');

    if(this.invoiceId) {

      this.invoiceId = Number(this.invoiceId);

      this.invoiceService.getInvoiceById(this.invoiceId).subscribe((res) => {
        if(res) {
          this.invoiceForm.patchValue({
            id: res.invoiceId,
            invoiceNumber: res.invoiceNumber,
            invoiceTotal: res.invoiceTotal,
            customerId: res.customerDTO.customerId,
            customerOrderId: res.customerOrderDTO.customerOrderId,
            storeId: res.storeDTO.storeId,
            employeeId: res.employeeDTO.employeeId
          });

          this.calculateTotalPrice(this.invoiceId);
        }
      });
    }
  }

  calculateTotalPrice(invoiceId: number) {
    this.invoiceItemService.getAllInvoiceItems().subscribe((invoiceItems) => {
      const filteredItems = invoiceItems.filter(item => item.invoiceDTO.invoiceId === invoiceId);

      this.totalInvoicePrice = filteredItems.reduce((total, item) => total + (item.itemPrice || 0), 0);
    });
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

  onSubmit() {
    if(this.invoiceForm.valid) {
      const updatedInvoice: Invoice = {
        invoiceId: this.invoiceId,
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

      this.invoiceService.updateInvoice(updatedInvoice).subscribe(() => {
        this.router.navigate(['/dashboard/invoice']);
      });
    }
  }

}
