import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-producer-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './producer-delete.component.html',
  styleUrl: './producer-delete.component.css'
})
export class ProducerDeleteComponent {

  @Input() producerId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.producerId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
