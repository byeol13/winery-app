import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-customer-order-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './customer-order-delete.component.html',
  styleUrl: './customer-order-delete.component.css'
})
export class CustomerOrderDeleteComponent {

  @Input() customerOrderId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.customerOrderId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
