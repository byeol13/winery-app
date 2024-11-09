import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Category } from '../../../../shared/models/Category.model';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatButtonModule, MatCardModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit{

  categoryId: any;
  categories: Category | undefined;
  displayedColumns: string[] = ['id', 'category_name'];

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute){
    this.categoryId = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.loadCategoryById();
  }

  loadCategoryById() {
    if(this.categoryId) {
      this.categoryService.getCategoryById(this.categoryId).subscribe((res) => {
        this.categories = res;
        // console.log("the is is: ", this.categoryId);
      })
    }
  }
}
