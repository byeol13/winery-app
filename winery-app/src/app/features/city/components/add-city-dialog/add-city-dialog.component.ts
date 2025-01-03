import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-city-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-city-dialog.component.html',
  styleUrl: './add-city-dialog.component.css'
})
export class AddCityDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCityDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
