import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerOrder } from '../../../shared/models/CustomerOrder.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerOrderService {

  private apiUrl = `http://localhost:3000/customerOrder`;

  constructor(private http: HttpClient) { }

  getAllCustomerOrders(): Observable<CustomerOrder[]> {
    return this.http.get<CustomerOrder[]>(this.apiUrl);
  }
}
