import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-bottle-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './add-bottle-dialog.component.html',
  styleUrl: './add-bottle-dialog.component.css'
})
export class AddBottleDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddBottleDialogComponent>) {}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }

}
