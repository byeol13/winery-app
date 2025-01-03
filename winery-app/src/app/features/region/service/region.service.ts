import { Region } from './../../../shared/models/Region.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private apiUrl = `http://localhost:8080/regions`;

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.apiUrl}/getAllRegions`);
  }

  getRegionById(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.apiUrl}/getRegionById?regionId=${id}`);
  }

  deleteRegionById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteRegion/${id}`);
  }

  addRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(`${this.apiUrl}/newRegion`, region);
  }

  updateRegion(region: Region): Observable<Region> {
    return this.http.put<Region>(`${this.apiUrl}/updateRegion`, region);
  }
}
