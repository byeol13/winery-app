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
import { Employee } from '../../../../shared/models/Employee.model';
import { Store } from '../../../../shared/models/Store.model';
import { Supplier } from '../../../../shared/models/Supplier.model';
import { SupplierService } from '../../../supplier/service/supplier.service';
import { StoreService } from '../../../store/service/store.service';
import { EmployeeService } from '../../../employee/service/employee.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { MatDialog } from '@angular/material/dialog';
import { AddSupplierComponent } from '../../../supplier/components/add-supplier/add-supplier.component';
import { Order } from '../../../../shared/models/Order.model';
import { OrderItemService } from '../../../orderItem/service/order-item.service';
import { OrderItem } from '../../../../shared/models/OrderItem.model';

@Component({
  selector: 'app-update-order',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatDatepickerModule,MatNativeDateModule, RouterModule],
  templateUrl: './update-order.component.html',
  styleUrl: './update-order.component.css'
})
export class UpdateOrderComponent implements OnInit{

  orderId: any;
  orderForm: FormGroup;
  suppliers: Supplier[] = [];
  stores: Store[] = [];
  employees: Employee[] = [];

  //
  totalOrderPrice: number | undefined;

  
  constructor(private fb: FormBuilder, private supplierService: SupplierService, private storeService: StoreService, private employeeService: EmployeeService, private dialog: MatDialog, private router: Router, private orderService: OrderService, private activatedRoute: ActivatedRoute, private orderItemService: OrderItemService){
  
    this.orderForm = this.fb.group({
      id: [{value: '', disabled: true}],
      orderNumber: [{ value: '', disabled: true }],
      expectedDeliveryDate: ['', Validators.required],
      timePlaced: ['', Validators.required],
      timeCanceled: [''],
      timeDelivered: [''],
      orderPrice: ['', Validators.required],
      supplierId: ['', Validators.required],
      storeId: ['', Validators.required],
      employeeId: ['', Validators.required]
    });
  
      this.loadSuppliers();
      this.loadStores();
      this.loadEmployees();
    }

    ngOnInit(): void {
      this.orderId = this.activatedRoute.snapshot.paramMap.get('orderId');

      if(this.orderId) {

        //
        this.orderId = Number(this.orderId);

        this.orderService.getOrderById(this.orderId).subscribe((res) => {
          if(res) {
            this.orderForm.patchValue({
              id: res.orderId,
              orderNumber: res.orderNumber,
              expectedDeliveryDate: res.expectedDeliveryDate,
              timePlaced: res.timePlaced,
              timeCanceled: res.timeCanceled,
              timeDelivered: res.timeDelivered,
              orderPrice: res.orderPrice,
              supplierId: res.supplierDTO.supplierId,
              storeId: res.storeDTO.storeId,
              employeeId: res.employeeDTO.employeeId
            });

            //
            this.calculateTotalPrice(this.orderId);
          }
        });
      }
    }

    //
    calculateTotalPrice(orderId: number) {
      this.orderItemService.getAllOrdedrItems().subscribe((orderItems) => {
        const filteredItems = orderItems.filter(item => item.orderDTO.orderId === orderId);
        
        this.totalOrderPrice = filteredItems.reduce((total, item) => total + (item.orderPrice || 0), 0);
      });
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
        width: '500px'
      });
    
      addSupplier.afterClosed().subscribe((newSupplier) => {
        if (newSupplier) {
          this.suppliers.push(newSupplier);
          this.orderForm.get('supplierId')?.setValue(newSupplier.supplierId);
        }
      });
    }

    onSubmit() {
      if(this.orderForm.valid) {
        const updatedOrder: Order = {
          orderId: this.orderId,
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

        this.orderService.updateOrder(updatedOrder).subscribe(() => {
          this.router.navigate(['/dashboard/order']);
        });
      }
    }
}
