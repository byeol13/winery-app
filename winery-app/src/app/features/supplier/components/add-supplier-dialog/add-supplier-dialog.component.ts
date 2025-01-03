import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-supplier-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-supplier-dialog.component.html',
  styleUrl: './add-supplier-dialog.component.css'
})
export class AddSupplierDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddSupplierDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
