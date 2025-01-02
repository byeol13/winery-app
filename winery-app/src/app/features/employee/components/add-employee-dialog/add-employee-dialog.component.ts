import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-employee-dialog.component.html',
  styleUrl: './add-employee-dialog.component.css'
})
export class AddEmployeeDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddEmployeeDialogComponent>) {}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
