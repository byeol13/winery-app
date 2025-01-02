import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-customer-dialog.component.html',
  styleUrl: './add-customer-dialog.component.css'
})
export class AddCustomerDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCustomerDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
