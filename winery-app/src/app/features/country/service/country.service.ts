import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../../shared/models/Country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = `http://localhost:8080/countries`;

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/getAllCountries`);
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/getCountryById?countryId=${id}`);
  }

  deleteCountryById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCountry/${id}`);
  }

  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(`${this.apiUrl}/newCountry`, country);
  }

  updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/updateCountry`, country);
  }
}
