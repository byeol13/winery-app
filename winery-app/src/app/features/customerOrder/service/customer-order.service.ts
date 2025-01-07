import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerOrder } from '../../../shared/models/CustomerOrder.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  private apiUrl = `http://localhost:8080/customerOrders`;

  constructor(private http: HttpClient) { }

  getAllCustomerOrders(): Observable<CustomerOrder[]> {
    return this.http.get<CustomerOrder[]>(`${this.apiUrl}/getAllCustomerOrders`);
  }

  getCustomerOrderById(id: number): Observable<CustomerOrder> {
    return this.http.get<CustomerOrder>(`${this.apiUrl}/getCustomerOrderById?customerOrderId=${id}`);
  }

  deleteCustomerOrderById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCustomerOrder/${id}`);
  }

  addCustomerOrder(customerOrder: CustomerOrder): Observable<CustomerOrder> {
    return this.http.post<CustomerOrder>(`${this.apiUrl}/newCustomerOrder`, customerOrder);
  }

  updateCustomerOrder(customerOrder: CustomerOrder): Observable<CustomerOrder> {
    return this.http.put<CustomerOrder>(`${this.apiUrl}/updateCustomerOrder`, customerOrder);
  }
}
