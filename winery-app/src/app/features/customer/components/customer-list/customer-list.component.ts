import { Component } from '@angular/core';
import { Customer } from '../../../../shared/models/Customer.model';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {

  customers: Customer[] = [];
  displayedColumns: string[] = ['id', 'username', 'password', 'customer_name', 'actions'];
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private customerService: CustomerService, private router: Router){}

  ngOnInit(): void {
    this.loadAllCustomers();
  } 

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res) => {
      this.customers = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/customer`, id]);
  }
}
