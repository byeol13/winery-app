import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-order-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './order-delete.component.html',
  styleUrl: './order-delete.component.css'
})
export class OrderDeleteComponent {

  @Input() orderId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.orderId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
