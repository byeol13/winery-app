import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './country-delete.component.html',
  styleUrl: './country-delete.component.css'
})
export class CountryDeleteComponent {

  @Input() countryId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.countryId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
