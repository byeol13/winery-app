import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../shared/models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `http://localhost:3000/category`

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}
