import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../../../shared/models/Employee.model';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{

  employeeId: any;
  employeeForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router){
    this.employeeForm = this.fb.group({
      id: [{value: '', disabled: true}],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      isActive: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.employeeId = this.activatedRoute.snapshot.paramMap.get('employeeId');

    if(this.employeeId) {
      this.employeeService.getEmployeeById(this.employeeId).subscribe((res) => {
        if(res) {
          this.employeeForm.patchValue({
            id: res.employeeId,
            firstName: res.firstName,
            lastName: res.lastName,
            username: res.username,
            password: res.password,
            phone: res.phone,
            email: res.email,
            isActive: +res.isActive
          });
        }
      });
    }
  }

  onSubmit() {
    if(this.employeeForm.valid) {
      const updatedEmployee: Employee = {
        employeeId: this.employeeId,
        firstName: this.employeeForm.get('firstName')?.value,
        lastName: this.employeeForm.get('lastName')?.value,
        username: this.employeeForm.get('username')?.value,
        password: this.employeeForm.get('password')?.value,
        phone: this.employeeForm.get('phone')?.value,
        email: this.employeeForm.get('email')?.value,
        isActive: this.employeeForm.get('isActive')?.value
      };

      this.employeeService.updateEmployee(updatedEmployee).subscribe(() => {
        this.router.navigate(['/dashboard/employee']);
      });
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
