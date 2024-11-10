import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../../../shared/models/Supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private apiUrl = `http://localhost:3000/supplier`;

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.apiUrl);
  }
}
