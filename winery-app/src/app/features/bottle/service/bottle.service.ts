import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bottle } from '../../../shared/models/Bottle.model';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  private apiUrl = `http://localhost:8080/bottles`;

  constructor(private http: HttpClient) { }

  getAllBottles(): Observable<Bottle[]> {
    return this.http.get<Bottle[]>(`${this.apiUrl}/getAllBottles`);
  }

  getBottleById(id: number): Observable<Bottle> {
    return this.http.get<Bottle>(`${this.apiUrl}/getBottleById?bottleId=${id}`);
  }

  deleteBottleById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteBottle/${id}`);
  } 

  addBottle(bottle: Bottle): Observable<Bottle> {
    return this.http.post<Bottle>(`${this.apiUrl}/newBottle`, bottle);
  }

  updateBottle(bottle: Bottle): Observable<Bottle> {
    return this.http.put<Bottle>(`${this.apiUrl}/updateBottle`, bottle);
  }
}
