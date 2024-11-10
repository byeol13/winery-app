import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceItem } from '../../../shared/models/InvoiceItem.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceItemService {

  private apiUrl = `http://localhost:3000/invoiceItem`;

  constructor(private http: HttpClient) { }

  getAllInvoiceItems(): Observable<InvoiceItem[]> {
    return this.http.get<InvoiceItem[]>(`${this.apiUrl}`);
  }

  getInvoiceItemById(id: number): Observable<InvoiceItem> {
    return this.http.get<InvoiceItem>(`${this.apiUrl}/${id}`);
  }
}
