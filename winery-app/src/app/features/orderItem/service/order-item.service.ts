import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from '../../../shared/models/OrderItem.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private apiUrl = `http://localhost:8080/orderItems`;

  constructor(private http: HttpClient) { }

  getAllOrdedrItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(`${this.apiUrl}/getAllOrderItems`);
  }

  getOrderItemById(id: number): Observable<OrderItem> {
    return this.http.get<OrderItem>(`${this.apiUrl}/getOrderItemById?orderItemId=${id}`);
  }

  deleteOrderItemBbyId(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteOrderItem/${id}`);
  }

  addOrderItem(orderItem: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(`${this.apiUrl}/newOrderItem`, orderItem);
  }
}
