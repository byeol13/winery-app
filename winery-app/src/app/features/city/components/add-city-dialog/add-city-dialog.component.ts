import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-city-dialog',
  standalone: true,
  imports: [MatButtonModule],
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
