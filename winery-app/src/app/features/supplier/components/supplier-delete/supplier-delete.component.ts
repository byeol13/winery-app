import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-supplier-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './supplier-delete.component.html',
  styleUrl: './supplier-delete.component.css'
})
export class SupplierDeleteComponent {

  @Input() supplierId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.supplierId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
