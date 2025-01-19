import { CommonModule } from '@angular/common';
import { Component, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CategoryService } from '../../service/category.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  isDialog: boolean;

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private dialog: MatDialog, private router: Router,  @Optional() private dialogRef: MatDialogRef<AddCategoryComponent>){

    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });

    this.isDialog = !!dialogRef;
  }

  openConfirmationDialog() {
    if(this.categoryForm.valid) {
      const addDialog = this.dialog.open(AddCategoryDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveCategory();
        }
      });
    }
  }

  saveCategory() {
    this.categoryService.addCategory(this.categoryForm.value).subscribe((newCategory) => {
      if (this.dialogRef) {
        this.dialogRef.close(newCategory);
      } else {
        this.router.navigate(['/dashboard/category']);
      }
    });
  }

  goBack() {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this.router.navigate(['/dashboard/category']);
    }
  }

}
