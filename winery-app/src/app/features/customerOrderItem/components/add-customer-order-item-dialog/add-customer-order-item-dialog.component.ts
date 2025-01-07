import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer-order-item-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-customer-order-item-dialog.component.html',
  styleUrl: './add-customer-order-item-dialog.component.css'
})
export class AddCustomerOrderItemDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCustomerOrderItemDialogComponent>){}
    
  onConfirm() {
    this.dialogRef.close('confirm');
  }
   
  onCancel() {
    this.dialogRef.close('cancel');
  }
}