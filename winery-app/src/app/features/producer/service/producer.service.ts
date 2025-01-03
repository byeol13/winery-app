import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producer } from '../../../shared/models/Producer.model';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {

  private apiUrl = `http://localhost:8080/producers`;

  constructor(private http: HttpClient) { }

  getAllProducers(): Observable<Producer[]> {
    return this.http.get<Producer[]>(`${this.apiUrl}/getAllProducers`);
  }

  getProducerById(id: number): Observable<Producer> {
    return this.http.get<Producer>(`${this.apiUrl}/getProducerById?producerId=${id}`);
  }

  deleteProducerById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteProducer/${id}`);
  }

  addProducer(producer: Producer): Observable<Producer> {
    return this.http.post<Producer>(`${this.apiUrl}/newProducer`, producer);
  }

  updateProducer(producer: Producer): Observable<Producer> {
    return this.http.put<Producer>(`${this.apiUrl}/updateProducer`, producer);
  }
}
