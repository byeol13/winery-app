import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-invoice-item-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './invoice-item-delete.component.html',
  styleUrl: './invoice-item-delete.component.css'
})
export class InvoiceItemDeleteComponent {

  @Input() invoiceItemId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.invoiceItemId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
