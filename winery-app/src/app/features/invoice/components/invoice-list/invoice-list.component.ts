import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Invoice } from '../../../../shared/models/Invoice.model';
import { InvoiceService } from '../../service/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit{

  invoices: Invoice[] = [];
  displayedColumns: string[] = ['id', 'invoice_number', 'invoice_total', 'time_created', 'actions'];

  constructor(private invoiceService: InvoiceService, private router: Router){}

  ngOnInit(): void {
    this.loadAllInvoices();
  }

  loadAllInvoices() {
    this.invoiceService.getAllInvoices().subscribe((res) => {
      this.invoices = res;
    })  
  }

  viewDetails(id: number) {
    this.router.navigate([`/invoice`, id]);
  }
}
