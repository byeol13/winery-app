import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-city-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './city-delete.component.html',
  styleUrl: './city-delete.component.css'
})
export class CityDeleteComponent {

  @Input() cityId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.cityId);
  }

  cancel() {
    this.cancelDelete.emit();
  }
}
