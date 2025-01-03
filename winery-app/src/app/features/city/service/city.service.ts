import { City } from './../../../shared/models/City.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl = `http://localhost:8080/cities`

  constructor(private http: HttpClient) { }

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.apiUrl}/getAllCities`);
  }

  getCityById(id: number): Observable<City> {
    return this.http.get<City>(`${this.apiUrl}/getCityById?cityId=${id}`);
  }

  deleteCityById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCity/${id}`);
  }

  addCity(city: City): Observable<City> {
    return this.http.post<City>(`${this.apiUrl}/newCity`, city);
  }

  updateCity(city: City): Observable<City> {
    return this.http.put<City>(`${this.apiUrl}/updateCity`, city);
  }
}
