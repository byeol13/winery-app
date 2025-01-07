import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Employee } from '../../../../shared/models/Employee.model';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule, MatIconModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit{

  employeeId: any;
  employees: Employee | undefined;
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'username', 'password', 'phone', 'email', 'is_active', 'actions'];
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute){
    this.employeeId = activatedRoute.snapshot.queryParamMap.get('employeeId');
  }

  ngOnInit(): void {
    this.loadEmployeeById();
  }

  loadEmployeeById() {
    if(this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe((res) => {
        this.employees = res;
      })
    }
  }
}
