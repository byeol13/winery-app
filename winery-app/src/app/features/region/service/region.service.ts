import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Region } from '../../../shared/models/Region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = `http://localhost:3000/region`;

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.apiUrl);
  }
}
