import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bottle-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './bottle-delete.component.html',
  styleUrl: './bottle-delete.component.css'
})
export class BottleDeleteComponent {

  @Input() bottleId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.bottleId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
  
}
