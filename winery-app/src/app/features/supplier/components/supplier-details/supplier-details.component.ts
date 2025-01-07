import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Supplier } from '../../../../shared/models/Supplier.model';
import { SupplierService } from '../../service/supplier.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule, RouterModule, MatIconModule],
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent {

  supplierId: any;
  suppliers: Supplier | undefined;
  displayedColumns: string[] = ['id', 'supplier_name', 'address', 'phone', 'mobile', 'email', 'details', 'actions'];

  constructor(private supplierService: SupplierService, private activatedRoute: ActivatedRoute){
    this.supplierId = activatedRoute.snapshot.queryParamMap.get('supplierId');
  }

  ngOnInit(): void {
    this.loadSupplierById();
  }

  loadSupplierById() {
    if(this.supplierId) {
      this.supplierService.getSupplierById(this.supplierId).subscribe((res) => {
        this.suppliers = res;
      })
    }
  }
}
