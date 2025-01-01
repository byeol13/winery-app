import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../../shared/models/Category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `http://localhost:8080/categories`

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/getAllCategories`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/getCategoryById?categoryId=${id}`);
  }

  deleteCategoryById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteCategory/${id}`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.apiUrl}/newCategory`, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/updateCategory`, category);
  }
}
