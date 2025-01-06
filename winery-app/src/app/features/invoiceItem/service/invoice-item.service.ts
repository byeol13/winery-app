import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceItem } from '../../../shared/models/InvoiceItem.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceItemService {

  private apiUrl = `http://localhost:8080/invoiceItems`;

  constructor(private http: HttpClient) { }

  getAllInvoiceItems(): Observable<InvoiceItem[]> {
    return this.http.get<InvoiceItem[]>(`${this.apiUrl}/getAllInvoiceItems`);
  }

  getInvoiceItemById(id: number): Observable<InvoiceItem> {
    return this.http.get<InvoiceItem>(`${this.apiUrl}/getInvoiceItemById?invoiceItemId=${id}`);
  }

  deleteInvoiceItemById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteInvoiceItem/${id}`);
  }

  addInvoiceItem(invoiceItem: InvoiceItem): Observable<InvoiceItem> {
    return this.http.post<InvoiceItem>(`${this.apiUrl}/newInvoiceItem`, invoiceItem);
  }
}
