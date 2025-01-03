import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../../shared/models/Supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = `http://localhost:8080/suppliers`;

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.apiUrl}/getAllSuppliers`);
  }

  getSupplierById(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.apiUrl}/getSupplierById?supplierId=${id}`);
  }

  deleteSupplierById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteSupplier/${id}`);
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.apiUrl}/newSupplier`, supplier);
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.apiUrl}/updateSupplier`, supplier);
  }
}
