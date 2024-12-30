import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CategoryService } from '../../service/category.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private dialog: MatDialog, private router: Router){

    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });
  }

  openConfirmationDialog() {
    if(this.categoryForm.valid) {
      const addDialog = this.dialog.open(AddCategoryDialogComponent, {
        width: '500px', height: '250px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveCategory();
        }
      });
    }
  }

  saveCategory() {
    this.categoryService.addCategory(this.categoryForm.value).subscribe(() => {
      this.router.navigate(['/dashboard/category']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/category']);
  }

}
