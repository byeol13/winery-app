import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderItem } from '../../../shared/models/OrderItem.model';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private apiUrl = `http://localhost:3000/orderItem`;

  constructor(private http: HttpClient) { }

  getAllOrdedrItems(): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.apiUrl);
  }
}
