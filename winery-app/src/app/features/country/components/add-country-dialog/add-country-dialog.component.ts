import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-country-dialog',
  standalone: true,
  imports: [MatButtonModule],
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
