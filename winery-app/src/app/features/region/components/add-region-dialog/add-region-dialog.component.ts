import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-region-dialog',
  standalone: true,
  imports: [],
  templateUrl: './add-region-dialog.component.html',
  styleUrl: './add-region-dialog.component.css'
})
export class AddRegionDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddRegionDialogComponent>) {}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
