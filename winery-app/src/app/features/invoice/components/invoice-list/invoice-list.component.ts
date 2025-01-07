import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Invoice } from '../../../../shared/models/Invoice.model';
import { InvoiceService } from '../../service/invoice.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvoiceDeleteComponent } from '../invoice-delete/invoice-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, InvoiceDeleteComponent, RouterModule, MatPaginator, MatPaginatorModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit{

  invoiceIdToDelete: number | undefined;
  invoices: Invoice[] = [];
  displayedColumns: string[] = ['id', 'invoice_number', 'customer_order_id', 'invoice_total', 'time_created', 'store_id', 'add-invoice-item', 'actions'];
  showDeleteDialog = false;

  totalInvoices: number = 0;
  displayedInvoices: Invoice[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private invoiceService: InvoiceService, private router: Router){}

  ngOnInit(): void {
    this.loadAllInvoices();
  }

  loadAllInvoices() {
    this.invoiceService.getAllInvoices().subscribe((res) => {
      this.invoices = res;
      this.totalInvoices = this.invoices.length;
      this.paginatedInvoices();
    })  
  }

  viewDetails(id: number) {
    this.router.navigate([`/invoice`], {queryParams: {invoiceId: id}});
  }

  openDeleteDialog(id: number) {
    this.invoiceIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteInvoiceById(id: number) {
    this.invoiceService.deleteInvoiceById(id).subscribe(() => {
      this.loadAllInvoices();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  addInvoiceItem(invoiceId: any) {
    this.router.navigate(['/addInvoiceItem', invoiceId]);
  }

  paginatedInvoices() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedInvoices = this.invoices.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
