import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Category } from '../../../../shared/models/Category.model';
import { Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTableModule, CategoryDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  categoryIdToDelete: number | undefined;
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'category_name', 'actions'];
  showDeleteDialog = false;
  totalCategories: number = 0;
  displayedCategories: Category[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private categoryService: CategoryService){}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
      this.totalCategories = this.categories.length;
      this.paginatedCategories();
    })
  }

  openDeleteDialog(id: number) {
    this.categoryIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteCategoryById(id: number) {
    this.categoryService.deleteCategoryById(id).subscribe(() => {
      this.loadAllCategories();
      this.showDeleteDialog = false;
    })
  }

  cancelDelete() {
    this.showDeleteDialog = false;
  }

  paginatedCategories() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedCategories = this.categories.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
