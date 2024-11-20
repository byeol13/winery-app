import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { InvoiceItem } from '../../../../shared/models/InvoiceItem.model';
import { InvoiceItemService } from '../../service/invoice-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-item-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './invoice-item-details.component.html',
  styleUrl: './invoice-item-details.component.css'
})
export class InvoiceItemDetailsComponent implements OnInit{

  invoiceItemId: any;
  invoiceItems: InvoiceItem | undefined;
  displayedColumns: string[] = ['id', 'invoice_id', 'bottle_id', 'quantity', 'item_price'];

  constructor(private invoiceItemService: InvoiceItemService, private activatedRoute: ActivatedRoute){
    this.invoiceItemId = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadInvoiceItemById();
  }

  loadInvoiceItemById() {
    if(this.invoiceItemId) {
      this.invoiceItemService.getInvoiceItemById(this.invoiceItemId).subscribe((res) => {
        this.invoiceItems = res;
      })
    }
  }
}
