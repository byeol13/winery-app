import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SupplierService } from '../../service/supplier.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddSupplierDialogComponent } from '../add-supplier-dialog/add-supplier-dialog.component';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatIconModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent {

  supplierForm: FormGroup;
  isDialog: boolean;

  constructor(private fb: FormBuilder, private supplierService: SupplierService, private router: Router, private dialog: MatDialog, @Optional() private dialogRef: MatDialogRef<AddSupplierComponent>) {
    this.isDialog = !!dialogRef;

    this.supplierForm = this.fb.group({
      supplierName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['', Validators.required]
    });
  }

  openConfirmationDialog() {
    if(this.supplierForm.valid) {
      const addDialog = this.dialog.open(AddSupplierDialogComponent, {
        width: '400px'
      });
      
      addDialog.afterClosed().subscribe((res) => {
        this.saveSupplier();
      })
    }
  }

  saveSupplier() {
    this.supplierService.addSupplier(this.supplierForm.value).subscribe((newSupplier) => {
      if(this.dialogRef) {
        this.dialogRef.close(newSupplier);
      } else {
        this.router.navigate(['/dashboard/supplier']);
      }
    });
  }

  goBack() {
    if(this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/dashboard/supplier']);
    }
  }
}
