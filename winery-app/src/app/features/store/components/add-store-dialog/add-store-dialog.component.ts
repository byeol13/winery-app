import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-store-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-store-dialog.component.html',
  styleUrl: './add-store-dialog.component.css'
})
export class AddStoreDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddStoreDialogComponent>){}
  
  onConfirm() {
    this.dialogRef.close('confirm');
  }
  
  onCancel() {
    this.dialogRef.close('cancel');
  }
}
