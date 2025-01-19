import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SupplierService } from '../../../supplier/service/supplier.service';
import { StoreService } from '../../../store/service/store.service';
import { EmployeeService } from '../../../employee/service/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { Supplier } from '../../../../shared/models/Supplier.model';
import { Store } from '../../../../shared/models/Store.model';
import { Employee } from '../../../../shared/models/Employee.model';
import { AddOrderDialogComponent } from '../add-order-dialog/add-order-dialog.component';
import { AddSupplierComponent } from '../../../supplier/components/add-supplier/add-supplier.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css'
})
export class AddOrderComponent {

  orderForm: FormGroup;
  suppliers: Supplier[] = [];
  stores: Store[] = [];
  employees: Employee[] = [];

  constructor(private fb: FormBuilder, private supplierService: SupplierService, private storeService: StoreService, private employeeService: EmployeeService, private dialog: MatDialog, private router: Router, private orderService: OrderService){

    this.orderForm = this.fb.group({
      orderNumber: ['', Validators.required],
      expectedDeliveryDate: ['', Validators.required],
      timePlaced: ['', Validators.required],
      timeCanceled: [''],
      timeDelivered: [''],
      orderPrice: [{value: '', disabled: true}],
      supplierId: ['', Validators.required],
      storeId: ['', Validators.required],
      employeeId: ['', Validators.required]
    });

     this.loadSuppliers();
     this.loadStores();
     this.loadEmployees();
  }

  loadSuppliers() {
    this.supplierService.getAllSuppliers().subscribe((res) => {
      this.suppliers = res;
    });
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

  openAddSupplierDialog() {
    const addSupplier = this.dialog.open(AddSupplierComponent, {
      width: '700px'
    });

    addSupplier.afterClosed().subscribe((newSupplier) => {
      if (newSupplier) {
        this.suppliers.push(newSupplier);
        this.orderForm.get('supplierId')?.setValue(newSupplier.supplierId);
      }
    });
  }

  openConfirmationDialog() {
    if(this.orderForm.valid) {
      const addDialog = this.dialog.open(AddOrderDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res === 'confirm') {
          this.saveOrder();
        }
      });
    }
  }

  saveOrder() {
    const newOrder = {
      orderNumber: this.orderForm.get('orderNumber')?.value,
      expectedDeliveryDate: this.orderForm.get('expectedDeliveryDate')?.value,
      timePlaced: this.orderForm.get('timePlaced')?.value,
      timeCanceled: this.orderForm.get('timeCanceled')?.value,
      timeDelivered: this.orderForm.get('timeDelivered')?.value,
      orderPrice: this.orderForm.get('orderPrice')?.value,
      supplierDTO: {
        supplierId: this.orderForm.get('supplierId')?.value
      },
      storeDTO: {
        storeId: this.orderForm.get('storeId')?.value
      },
      employeeDTO: {
        employeeId: this.orderForm.get('employeeId')?.value
      }
    };

    this.orderService.addOrder(newOrder).subscribe(() => {
      this.router.navigate(['/dashboard/order']);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard/order']);
  }
}