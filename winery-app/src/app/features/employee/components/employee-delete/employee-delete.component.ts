import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee-delete',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './employee-delete.component.html',
  styleUrl: './employee-delete.component.css'
})
export class EmployeeDeleteComponent {

  @Input() employeeId: number | undefined;

  @Output() delete = new EventEmitter<number>();
  @Output() cancelDelete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit(this.employeeId);
  }

  cancel() {
    this.cancelDelete.emit();
  }

}
