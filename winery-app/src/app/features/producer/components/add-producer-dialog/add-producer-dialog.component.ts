import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-producer-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-producer-dialog.component.html',
  styleUrl: './add-producer-dialog.component.css'
})
export class AddProducerDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddProducerDialogComponent>){}

  onConfirm() {
    this.dialogRef.close('confirm');
  }

  onCancel() {
    this.dialogRef.close('cancel');
  }
}
