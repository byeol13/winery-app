import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-order-item-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './customer-order-item-delete.component.html',
  styleUrl: './customer-order-item-delete.component.css'
})
export class CustomerOrderItemDeleteComponent {

  @Input() customerOrderItemId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.customerOrderItemId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
