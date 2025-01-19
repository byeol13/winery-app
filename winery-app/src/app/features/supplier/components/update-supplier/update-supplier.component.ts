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
import { SupplierService } from '../../service/supplier.service';
import { Supplier } from '../../../../shared/models/Supplier.model';

@Component({
  selector: 'app-update-supplier',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, MatIconModule, RouterModule],
  templateUrl: './update-supplier.component.html',
  styleUrl: './update-supplier.component.css'
})
export class UpdateSupplierComponent implements OnInit{

  supplierId: any;
  supplierForm: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private supplierService: SupplierService, private router: Router){
    this.supplierForm = this.fb.group({
      id: [{value: '', disabled: true}],
      supplierName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.supplierId = this.activatedRoute.snapshot.paramMap.get('supplierId');

    if(this.supplierId) {
      this.supplierService.getSupplierById(this.supplierId).subscribe((res) => {
        if(res) {
          this.supplierForm.patchValue({
            id: res.supplierId,
            supplierName: res.supplierName,
            address: res.address,
            phone: res.phone,
            mobile: res.mobile,
            email: res.email,
            details: res.details
          });
        }
      });
    }
  }

  onSubmit() {
    if(this.supplierForm.valid) {
      const upatedSupplier: Supplier = {
        supplierId: this.supplierId,
        supplierName: this.supplierForm.get('supplierName')?.value,
        address: this.supplierForm.get('address')?.value,
        phone: this.supplierForm.get('phone')?.value,
        mobile: this.supplierForm.get('mobile')?.value,
        email: this.supplierForm.get('email')?.value,
        details: this.supplierForm.get('details')?.value
      };

      this.supplierService.updateSupplier(upatedSupplier).subscribe(() => {
        this.router.navigate(['/dashboard/supplier']);
      });
    }
  }

}
