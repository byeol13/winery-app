import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-item-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './order-item-delete.component.html',
  styleUrl: './order-item-delete.component.css'
})
export class OrderItemDeleteComponent {

  @Input() orderItemId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.orderItemId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
