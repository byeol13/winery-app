import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Employee } from '../../../../shared/models/Employee.model';
import { EmployeeService } from '../../service/employee.service';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeDeleteComponent } from '../employee-delete/employee-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, MatIconModule, CommonModule, EmployeeDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employeeIdToDelete: number | undefined;
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'username', 'password', 'actions'];
  showPassword = false;
  showDeleteDialog = false;

  totalEmployees: number = 0;
  displayedEmployees: Employee[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit(): void {
    this.loadAllEmployees();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  loadAllEmployees() {
    this.employeeService.getAllEmployees().subscribe((res) => {
      this.employees = res;
      this.totalEmployees = this.employees.length;
      this.paginatedEmployees();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/employee`], {queryParams: {employeeId: id}});
  }

  openDeleteDialog(id: number) {
    this.employeeIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteEmployeeById(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(() => {
      this.loadAllEmployees();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedEmployees() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedEmployees = this.employees.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
