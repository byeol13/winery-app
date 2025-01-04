import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-invoice-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-invoice-dialog.component.html',
  styleUrl: './add-invoice-dialog.component.css'
})
export class AddInvoiceDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddInvoiceDialogComponent>){}
    
  onConfirm() {
    this.dialogRef.close('confirm');
  }
    
  onCancel() {
    this.dialogRef.close('cancel');
  }
}
