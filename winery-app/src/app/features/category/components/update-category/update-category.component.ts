import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CategoryService } from '../../service/category.service';
import { Category } from '../../../../shared/models/Category.model';

@Component({
  selector: 'app-update-category',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule, MatCardContent, ReactiveFormsModule, RouterModule],
  templateUrl: './update-category.component.html',
  styleUrl: './update-category.component.css'
})
export class UpdateCategoryComponent implements OnInit{

  categoryId: any;
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private router: Router) {
    this.categoryForm = this.fb.group({
      id: [{value: '', disabled: true}],
      categoryName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');

    if(this.categoryId) {
      this.categoryService.getCategoryById(this.categoryId).subscribe((res) => {
        if(res) {
          this.categoryForm.patchValue(
            {
              id: res.categoryId,
              categoryName: res.categoryName
            });
        }
      });
    }
  }

  onSubmit() {
    if(this.categoryForm.valid) {
      const updatedCategory: Category = {
        categoryId: this.categoryId,
        categoryName: this.categoryForm.get('categoryName')?.value
      };

      this.categoryService.updateCategory(updatedCategory).subscribe(() => {
        this.router.navigate(['/dashboard/category']);
      })
    }
  }

}
