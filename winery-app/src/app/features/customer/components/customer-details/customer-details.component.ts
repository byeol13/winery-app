import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Customer } from '../../../../shared/models/Customer.model';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule, MatIconModule, RouterModule, MatIconModule],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css'
})
export class CustomerDetailsComponent implements OnInit{

  customerId: any;
  customers: Customer | undefined;
  displayedColumns: string[] = ['id', 'username', 'password', 'customer_name', 'address', 'phone', 'email', 'actions'];
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute){
    this.customerId = activatedRoute.snapshot.queryParamMap.get('customerId');
  }

  ngOnInit(): void {
    this.loadCustomerById();
  }

  loadCustomerById() {
    if(this.customerId) {
      this.customerService.getCustomerById(this.customerId).subscribe((res) => {
        this.customers = res;
      })
    }
  }
}
