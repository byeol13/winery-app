import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Supplier } from '../../../../shared/models/Supplier.model';
import { SupplierService } from '../../service/supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent implements OnInit{

  suppliers: Supplier[] = [];
  displayedColumns: string[] = ['id', 'supplier_name', 'address', 'actions'];

  constructor(private supplierService: SupplierService, private router: Router){}

  ngOnInit(): void {
    this.loadAllSuppliers();
  }

  loadAllSuppliers() {
    this.supplierService.getAllSuppliers().subscribe((res) => {
      this.suppliers = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`supplier`, id]);
  }

}
