import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-country-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-country-dialog.component.html',
  styleUrl: './add-country-dialog.component.css'
})
export class AddCountryDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddCountryDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
