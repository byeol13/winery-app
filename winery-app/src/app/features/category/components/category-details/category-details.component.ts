import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Category } from '../../../../shared/models/Category.model';
import { CategoryService } from '../../service/category.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatButtonModule, MatCardModule, RouterModule, MatIconModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit{

  categoryId: any;
  categories: Category | undefined;
  displayedColumns: string[] = ['id', 'category_name', 'actions'];

  constructor(private categoryService: CategoryService, private activatedRoute: ActivatedRoute){
    this.categoryId = activatedRoute.snapshot.queryParamMap.get('categoryId');
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
