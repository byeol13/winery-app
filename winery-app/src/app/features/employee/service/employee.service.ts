import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../../shared/models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = `http://localhost:3000/employee`;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
