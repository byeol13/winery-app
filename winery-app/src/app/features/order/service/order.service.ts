import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../shared/models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = `http://localhost:8080/orders`;

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/getAllOrders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/getOrderById?orderId=${id}`);
  }

  deleteOrderById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteOrder/${id}`);
  }

  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/newOrder`, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/updateOrder`, order);
  }
}
