import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Invoice } from '../../../../shared/models/Invoice.model';
import { InvoiceService } from '../../service/invoice.service';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit{

  invoices: Invoice[] = [];
  displayedColumns: string[] = ['id', 'invoice_number', 'invoice_total', 'time_created'];

  constructor(private invoiceService: InvoiceService){}

  ngOnInit(): void {
    this.loadAllInvoices();
  }

  loadAllInvoices() {
    this.invoiceService.getAllInvoices().subscribe((res) => {
      this.invoices = res;
    })  
  }
}
