import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from '../../../shared/models/Inventory.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = `http://localhost:8080/inventories`;

  constructor(private http: HttpClient) { }

  getAllInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(`${this.apiUrl}/getAllInventories`);
  }

  getInventoryById(id: number): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.apiUrl}/getInventoryById?inventoryId=${id}`);
  }

  deleteInventoryById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteInventory/${id}`);
  }

  addInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(`${this.apiUrl}/newInventory`, inventory);
  }

  updateInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.apiUrl}/updateInventory`, inventory);
  }
}

