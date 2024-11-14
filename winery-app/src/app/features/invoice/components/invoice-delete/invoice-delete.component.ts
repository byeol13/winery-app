import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-invoice-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './invoice-delete.component.html',
  styleUrl: './invoice-delete.component.css'
})
export class InvoiceDeleteComponent {

  @Input() invoiceId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.invoiceId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
