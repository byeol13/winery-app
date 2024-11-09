import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bottle } from '../../../shared/models/Bottle.model';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  private apiUrl = `http://localhost:3000/bottle`;

  constructor(private http: HttpClient) { }

  getAllBottles(): Observable<Bottle[]> {
    return this.http.get<Bottle[]>(this.apiUrl);
  }

  getBottleById(id: number): Observable<Bottle> {
    return this.http.get<Bottle>(`${this.apiUrl}/${id}`);
  }
}
