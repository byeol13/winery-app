import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { InvoiceItem } from '../../../../shared/models/InvoiceItem.model';
import { InvoiceItemService } from '../../service/invoice-item.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvoiceItemDeleteComponent } from '../invoice-item-delete/invoice-item-delete.component';

@Component({
  selector: 'app-invoice-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule, CommonModule, InvoiceItemDeleteComponent],
  templateUrl: './invoice-item-list.component.html',
  styleUrl: './invoice-item-list.component.css'
})
export class InvoiceItemListComponent implements OnInit{

  invoiceItemIdToDelete: number | undefined;
  invoiceItems: InvoiceItem[] = [];
  displayedColumns: string[] = ['id', 'invoice_id', 'bottle_id', 'item_price', 'actions'];
  showDeleteDialog = false;

  constructor(private invoiceItemService: InvoiceItemService, private router: Router){}

  ngOnInit(): void {
    this.loadAllInvoiceItems();
  }

  loadAllInvoiceItems() {
    this.invoiceItemService.getAllInvoiceItems().subscribe((res) => {
      this.invoiceItems = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/invoiceItem`, id]);
  }

  openDeleteDialog(id: number) {
    this.invoiceItemIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteInvoiceItemById(id: number) {
    this.invoiceItemService.deleteInvoiceItemById(id).subscribe(() => {
      this.loadAllInvoiceItems();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }
}
