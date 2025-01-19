import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-invoice-item-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-invoice-item-dialog.component.html',
  styleUrl: './add-invoice-item-dialog.component.css'
})
export class AddInvoiceItemDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddInvoiceItemDialogComponent>){}
      
    onConfirm() {
      this.dialogRef.close('confirm');
    }
     
    onCancel() {
      this.dialogRef.close('cancel');
    }
}
