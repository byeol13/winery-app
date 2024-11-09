import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerOrderItem } from '../../../shared/models/CustomerOrderItem.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderItemService {

  private apiUrl = `http://localhost:3000/customerOrderItem`;

  constructor(private http: HttpClient) { }

  getAllCustomerOrderItems(): Observable<CustomerOrderItem[]> {
    return this.http.get<CustomerOrderItem[]>(this.apiUrl);
  }

  getCustomerOrderItemById(id: number): Observable<CustomerOrderItem> {
    return this.http.get<CustomerOrderItem>(`${this.apiUrl}/${id}`);
  }
}
