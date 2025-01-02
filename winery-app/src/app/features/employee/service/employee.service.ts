import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../shared/models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = `http://localhost:8080/employees`;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/getAllEmployees`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/getEmployeeById?employeeId=${id}`);
  }

  deleteEmployeeById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteEmployee/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/newEmployee`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/updateEmployee`, employee);
  }
}
