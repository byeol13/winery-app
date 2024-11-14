import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-inventory-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './inventory-delete.component.html',
  styleUrl: './inventory-delete.component.css'
})
export class InventoryDeleteComponent {

  @Input() inventoryId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.inventoryId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
