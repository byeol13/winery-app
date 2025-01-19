import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../../../shared/models/Customer.model';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.css'
})
export class UpdateCustomerComponent implements OnInit{

  customerId: any;
  customerForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private customerService: CustomerService, private router: Router) {
    this.customerForm = this.fb.group({
      id: [{value: '', disabled: true}],
      username: ['', Validators.required],
      password: ['', Validators.required],
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.customerId = this.activatedRoute.snapshot.paramMap.get('customerId');

    if(this.customerId) {
      this.customerService.getCustomerById(this.customerId).subscribe((res) => {
        if (res) {
          this.customerForm.patchValue({
            id: res.customerId,
            username: res.username,
            password: res.password,
            customerName: res.customerName,
            address: res.address,
            phone: res.phone,
            email: res.email
          });
        }
      });
    }
  }

  onSubmit() {
    if(this.customerForm.valid) {
      const updatedCustomer: Customer = {
        customerId: this.customerId,
        username: this.customerForm.get('username')?.value,
        password: this.customerForm.get('password')?.value,
        customerName: this.customerForm.get('customerName')?.value,
        address: this.customerForm.get('address')?.value,
        phone: this.customerForm.get('phone')?.value,
        email: this.customerForm.get('email')?.value,
      };

      this.customerService.updateCustomer(updatedCustomer).subscribe(() => {
        this.router.navigate(['/dashboard/customer']);
      })
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

}
