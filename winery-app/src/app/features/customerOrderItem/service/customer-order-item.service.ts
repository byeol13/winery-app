import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerOrderItem } from '../../../shared/models/CustomerOrderItem.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderItemService {

  private apiUrl = `http://localhost:8080/customerOrderItems`;

  constructor(private http: HttpClient) { }

  getAllCustomerOrderItems(): Observable<CustomerOrderItem[]> {
    return this.http.get<CustomerOrderItem[]>(`${this.apiUrl}/getAllCustomerOrderItems`);
  }

  getCustomerOrderItemById(id: number): Observable<CustomerOrderItem> {
    return this.http.get<CustomerOrderItem>(`${this.apiUrl}/getCustomerOrderItemById?customerOrderItemId=${id}`);
  }

  deleteCustomerOrderItemById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCustomerOrderItems/${id}`);
  }

  addCustomerOrderItem(customerOrderItem: CustomerOrderItem): Observable<CustomerOrderItem> {
    return this.http.post<CustomerOrderItem>(`${this.apiUrl}/newCustomerOrderItems`, customerOrderItem);
  }
}
