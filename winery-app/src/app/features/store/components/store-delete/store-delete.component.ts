import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-store-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './store-delete.component.html',
  styleUrl: './store-delete.component.css'
})
export class StoreDeleteComponent {

  @Input() storeId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.storeId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
