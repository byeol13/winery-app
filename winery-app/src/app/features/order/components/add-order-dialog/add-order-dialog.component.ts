import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-order-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-order-dialog.component.html',
  styleUrl: './add-order-dialog.component.css'
})
export class AddOrderDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddOrderDialogComponent>){}
  
    onConfirm() {
      this.dialogRef.close('confirm');
    }
  
    onCancel() {
      this.dialogRef.close('cancel');
    }
}
