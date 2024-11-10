import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producer } from '../../../shared/models/Producer.model';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  private apiUrl = `http://localhost:3000/producer`;

  constructor(private http: HttpClient) { }

  getAllProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>(this.apiUrl);
  }
}
