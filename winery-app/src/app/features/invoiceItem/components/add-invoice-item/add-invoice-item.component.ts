import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, ActivatedRoute } from '@angular/router';
import { BottleService } from '../../../bottle/service/bottle.service';
import { InvoiceService } from '../../../invoice/service/invoice.service';
import { InvoiceItemService } from '../../service/invoice-item.service';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { Invoice } from '../../../../shared/models/Invoice.model';
import { AddInvoiceItemDialogComponent } from '../add-invoice-item-dialog/add-invoice-item-dialog.component';

@Component({
  selector: 'app-add-invoice-item',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-invoice-item.component.html',
  styleUrl: './add-invoice-item.component.css'
})
export class AddInvoiceItemComponent implements OnInit{

  invoiceId: any;
  invoiceItemForm: FormGroup;
  bottles: Bottle[] = [];
  invoices: Invoice[] = [];
  itemPrice: number = 0;
  invoiceNumber: string = '';

  constructor(private fb: FormBuilder, private bottleService: BottleService, private invoiceService: InvoiceService, private router: Router, private dialog: MatDialog, private invoiceItemService: InvoiceItemService, private activatedRoute: ActivatedRoute){
    this.invoiceItemForm = this.fb.group({
      bottleId: ['', Validators.required],
      invoiceId: ['', Validators.required],
      quantity: ['', Validators.required],
      itemPrice: [{ value: '', disabled: true }]
    });

    this.loadBottles();
    this.loadInvoices();
  }

  ngOnInit(): void {
    this.invoiceId = this.activatedRoute.snapshot.paramMap.get('invoiceId') || '';

    this.invoiceService.getInvoiceById(this.invoiceId).subscribe((invoice: Invoice) => {
      if (invoice) {
        this.invoiceNumber = invoice.invoiceNumber;

        this.invoiceItemForm.patchValue({
          invoiceId: this.invoiceId,
          itemPrice: 0
        });
      }
    });
  }

  loadBottles() {
    this.bottleService.getAllBottles().subscribe((res) => {
      this.bottles = res;
    });
  }

  loadInvoices() {
    this.invoiceService.getAllInvoices().subscribe((res) => {
      this.invoices = res;
    })
  }

  onBottleChange() {
    this.calculatePrice();
  }

  onQuantityChange() {
    this.calculatePrice();
  }

  calculatePrice() {
    const bottleId = this.invoiceItemForm.get('bottleId')?.value;
    const quantity = this.invoiceItemForm.get('quantity')?.value;

    const selectedBottle = this.bottles.find(bottle => bottle.bottleId === bottleId);

    if (selectedBottle && quantity) {
      this.itemPrice = selectedBottle.currentPrice * quantity;
      this.invoiceItemForm.patchValue({
        itemPrice: this.itemPrice
      });
    }
  }

  openConfirmationDialog() {
    if (this.invoiceItemForm.valid) {
      const addDialog = this.dialog.open(AddInvoiceItemDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveInvoiceItem();
        }
      });
    }
  }

  saveInvoiceItem() {
    const newInvoiceItem = {
      bottleDTO: {
        bottleId: this.invoiceItemForm.get('bottleId')?.value
      },
      invoiceDTO: {
        invoiceId: this.invoiceItemForm.get('invoiceId')?.value
      },
      quantity: this.invoiceItemForm.get('quantity')?.value,
      itemPrice: this.invoiceItemForm.get('itemPrice')?.value
    };

    this.invoiceItemService.addInvoiceItem(newInvoiceItem).subscribe(() => {
      this.router.navigate(['/updateInvoice', newInvoiceItem.invoiceDTO.invoiceId]);
    });
  }

  goBack() {
    this.router.navigate(['/dashboard/invoice']);
  }
}
