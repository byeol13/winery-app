import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-inventory-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-inventory-dialog.component.html',
  styleUrl: './add-inventory-dialog.component.css'
})
export class AddInventoryDialogComponent {

  constructor(private dialogRef: MatDialogRef<AddInventoryDialogComponent>){}
    
  onConfirm() {
    this.dialogRef.close('confirm');
  }
   
  onCancel() {
    this.dialogRef.close('cancel');
  }
}
