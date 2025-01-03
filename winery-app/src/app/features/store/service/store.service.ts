import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '../../../shared/models/Store.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private apiUrl = `http://localhost:8080/stores`;

  constructor(private http: HttpClient) { }

  getAllStores(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.apiUrl}/getAllStores`);
  }

  getStoreById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.apiUrl}/getStoreById?storeId=${id}`);
  }

  deleteStoreById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteStore/${id}`);
  }

  addStore(store: Store): Observable<Store> {
    return this.http.post<Store>(`${this.apiUrl}/newStore`, store);
  }

  updateStore(store: Store): Observable<Store> {
    return this.http.put<Store>(`${this.apiUrl}/updateStore`, store);
  }
}
