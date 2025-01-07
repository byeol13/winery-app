import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-order-item-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-order-item-dialog.component.html',
  styleUrl: './add-order-item-dialog.component.css'
})
export class AddOrderItemDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddOrderItemDialogComponent>){}
    
  onConfirm() {
    this.dialogRef.close('confirm');
  }
   
  onCancel() {
    this.dialogRef.close('cancel');
  }
}