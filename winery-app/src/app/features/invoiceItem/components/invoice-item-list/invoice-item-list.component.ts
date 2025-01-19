import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { InvoiceItem } from '../../../../shared/models/InvoiceItem.model';
import { InvoiceItemService } from '../../service/invoice-item.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvoiceItemDeleteComponent } from '../invoice-item-delete/invoice-item-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-invoice-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, InvoiceItemDeleteComponent, MatPaginatorModule, MatPaginator],
  templateUrl: './invoice-item-list.component.html',
  styleUrl: './invoice-item-list.component.css'
})
export class InvoiceItemListComponent implements OnInit{

  invoiceItemIdToDelete: number | undefined;
  invoiceItems: InvoiceItem[] = [];
  displayedColumns: string[] = ['id', 'invoice_id', 'bottle_id', 'item_price', 'quantity', 'actions'];
  showDeleteDialog = false;

  totalInvoiceItems: number = 0;
  displayedInvoiceItems: InvoiceItem[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private invoiceItemService: InvoiceItemService, private router: Router){}

  ngOnInit(): void {
    this.loadAllInvoiceItems();
  }

  loadAllInvoiceItems() {
    this.invoiceItemService.getAllInvoiceItems().subscribe((res) => {
      this.invoiceItems = res;
      this.totalInvoiceItems = this.invoiceItems.length;
      this.paginatedInvoiceItems();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/invoiceItem`], {queryParams: {invoiceItemId: id}});
  }

  openDeleteDialog(id: number) {
    this.invoiceItemIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteInvoiceItemById(id: number) {
    const invoiceItem = this.invoiceItems.find(item => item.invoiceItemId === id);
    const invoiceId = invoiceItem?.invoiceDTO?.invoiceId;

    if (!invoiceId) {
      console.error('Unable to find associated invoice for the deleted invoice item.');
      return;
    }

    this.invoiceItemService.deleteInvoiceItemById(id).subscribe(() => {
      this.loadAllInvoiceItems();
      this.showDeleteDialog = false;

      this.router.navigate(['/updateInvoice', invoiceId]);
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedInvoiceItems() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedInvoiceItems = this.invoiceItems.slice(startIndex, startIndex + this.paginator.pageSize);
  }
}
