import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Category } from '../../../../shared/models/Category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTableModule, CategoryDeleteComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  categoryIdToDelete: number | undefined;
  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'category_name', 'actions'];
  showDeleteDialog = false;

  constructor(private router: Router, private categoryService: CategoryService){}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/category`, id]);
    console.log("This id is === ", id);
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

}
