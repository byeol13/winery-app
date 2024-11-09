import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Category } from '../../../../shared/models/Category.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTableModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  categories: Category[] = [];
  displayedColumns: string[] = ['id', 'category_name', 'actions'];

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

}
