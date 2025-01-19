import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatIconModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customerForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private router: Router, private customerService: CustomerService, private dialog: MatDialog, @Optional() private dialogRef: MatDialogRef<AddCustomerComponent>){

    this.customerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      customerName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openConfirmationDialog() {
    if(this.customerForm.valid) {
      const addDialog = this.dialog.open(AddCustomerDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res === 'confirm') {
          this.saveCustomer();
        }
      });
    }
  }

  saveCustomer() {
    this.customerService.addCustomer(this.customerForm.value).subscribe((newCustomer) => {
      if(this.dialogRef) {
        this.dialogRef.close(newCustomer);
      } else {
        this.router.navigate(['/dashboard/customer']);
      }
    });
  }

  goBack() {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/dashboard/customer']);
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

}
