import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Invoice } from '../../../../shared/models/Invoice.model';
import { InvoiceService } from '../../service/invoice.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-invoice-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule, RouterModule, MatIconModule],
  templateUrl: './invoice-details.component.html',
  styleUrl: './invoice-details.component.css'
})
export class InvoiceDetailsComponent implements OnInit{

  invoiceId: any;
  invoices: Invoice | undefined;
  displayedColumns: string[] = ['id', 'invoice_number', 'customer_order_id', 'customer_id', 'invoice_total', 'time_created', 'employee_id', 'store_id', 'actions'];

  constructor(private invoiceService: InvoiceService, private activatedRoute: ActivatedRoute){
    this.invoiceId = activatedRoute.snapshot.queryParamMap.get('invoiceId');
  }

  ngOnInit(): void {
    this.loadInvoiceById();
  }

  loadInvoiceById() {
    if(this.invoiceId) {
      this.invoiceService.getInvoiceById(this.invoiceId).subscribe((res) => {
        this.invoices = res;
      })
    }
  }
}
