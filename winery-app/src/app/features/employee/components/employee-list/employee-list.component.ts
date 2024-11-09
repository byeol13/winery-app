import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Employee } from '../../../../shared/models/Employee.model';
import { EmployeeService } from '../../service/employee.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, MatIconModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'username', 'password'];
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.employees = res;
    })
  }
}
