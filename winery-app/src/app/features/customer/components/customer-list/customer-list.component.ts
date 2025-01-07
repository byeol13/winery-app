import { Component, ViewChild } from '@angular/core';
import { Customer } from '../../../../shared/models/Customer.model';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerService } from '../../service/customer.service';
import { Router, RouterModule } from '@angular/router';
import { CustomerDeleteComponent } from '../customer-delete/customer-delete.component';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, MatIconModule, CustomerDeleteComponent, CommonModule, RouterModule, MatPaginatorModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customerIdToDelete: number | undefined;
  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'username', 'password', 'customer_name', 'actions'];
  showPassword = false;
  showDeleteDialog = false;

  totalCustomers: number = 0;
  displayedCustomers: Customer[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator; 

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomers();
  } 

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
      this.totalCustomers = this.customers.length;
      this.paginatedCustomers();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/customer`], {queryParams: {
      customerId: id
    }});
  }

  openDeleteDialog(id: number) {
    this.customerIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCustomerById(id: number) {
    this.customerService.deleteCustomerById(id).subscribe(() => {
      this.loadAllCustomers();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedCustomers() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCustomers = this.customers.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
