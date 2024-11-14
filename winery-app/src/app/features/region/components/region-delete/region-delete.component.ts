import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-region-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './region-delete.component.html',
  styleUrl: './region-delete.component.css'
})
export class RegionDeleteComponent {

  @Input() regionId: number | undefined; 

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.regionId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
