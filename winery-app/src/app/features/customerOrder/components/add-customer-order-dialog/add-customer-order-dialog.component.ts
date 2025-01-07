import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer-order-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-customer-order-dialog.component.html',
  styleUrl: './add-customer-order-dialog.component.css'
})
export class AddCustomerOrderDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCustomerOrderDialogComponent>){}
  
  onConfirm() {
    this.dialogRef.close('confirm');
  }
  
  onCancel() {
    this.dialogRef.close('cancel');
  }
}