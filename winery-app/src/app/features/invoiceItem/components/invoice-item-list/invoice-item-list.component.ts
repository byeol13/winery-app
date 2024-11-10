import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { InvoiceItem } from '../../../../shared/models/InvoiceItem.model';
import { InvoiceItemService } from '../../service/invoice-item.service';

@Component({
  selector: 'app-invoice-item-list',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatToolbarModule],
  templateUrl: './invoice-item-list.component.html',
  styleUrl: './invoice-item-list.component.css'
})
export class InvoiceItemListComponent implements OnInit{

  invoiceItems: InvoiceItem[] = [];
  displayedColumns: string[] = ['id', 'quantity', 'item_price'];

  constructor(private invoiceItemService: InvoiceItemService){}

  ngOnInit(): void {
    this.loadAllInvoiceItems();
  }

  loadAllInvoiceItems() {
    this.invoiceItemService.getAllInvoiceItems().subscribe((res) => {
      this.invoiceItems = res;
    })
  }
}
