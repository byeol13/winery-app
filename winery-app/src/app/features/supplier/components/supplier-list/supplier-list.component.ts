import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Supplier } from '../../../../shared/models/Supplier.model';
import { SupplierService } from '../../service/supplier.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupplierDeleteComponent } from '../supplier-delete/supplier-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, SupplierDeleteComponent, RouterModule, MatPaginatorModule, MatPaginator],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent implements OnInit{

  supplierIdToDelete: number | undefined;
  suppliers: Supplier[] = [];
  displayedColumns: string[] = ['id', 'supplier_name', 'address', 'actions'];
  showDeleteDialog = false;

  totalSuppliers: number = 0;
  displayedSuppliers: Supplier[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private supplierService: SupplierService, private router: Router){}

  ngOnInit(): void {
    this.loadAllSuppliers();
  }

  loadAllSuppliers() {
    this.supplierService.getAllSuppliers().subscribe((res) => {
      this.suppliers = res;
      this.totalSuppliers = this.suppliers.length;
      this.paginatedSuppliers();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`supplier`], {queryParams: {supplierId: id}});
  }

  openDeleteDialog(id: number) {
    this.supplierIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteSupplierById(id: number) {
    this.supplierService.deleteSupplierById(id).subscribe(() => {
      this.loadAllSuppliers();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedSuppliers() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedSuppliers = this.suppliers.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
