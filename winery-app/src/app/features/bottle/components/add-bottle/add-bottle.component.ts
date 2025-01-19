import { MatToolbarModule } from '@angular/material/toolbar';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../category/service/category.service';
import { ProducerService } from '../../../producer/service/producer.service';
import { BottleService } from '../../service/bottle.service';
import { Category } from '../../../../shared/models/Category.model';
import { Producer } from '../../../../shared/models/Producer.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddBottleDialogComponent } from '../add-bottle-dialog/add-bottle-dialog.component';
import { MatCardModule } from '@angular/material/card';
import { AddCategoryComponent } from '../../../category/components/add-category/add-category.component';

@Component({
  selector: 'app-add-bottle',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-bottle.component.html',
  styleUrls: ['./add-bottle.component.css'],
})
export class AddBottleComponent {
  bottleForm: FormGroup;
  categories: Category[] = [];
  producers: Producer[] = [];

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private producerService: ProducerService, private bottleService: BottleService, private router: Router, private dialog: MatDialog) {

    this.bottleForm = this.fb.group({
      fullName: ['', Validators.required],
      label: ['', Validators.required],
      volume: ['', Validators.required],
      yearProduced: [new Date().getFullYear(), Validators.required],
      picture: ['', Validators.required],
      alcoholPercentage: ['', Validators.required],
      currentPrice: ['', Validators.required],
      categoryId: ['', Validators.required],
      producerId: ['', Validators.required],
    });

    this.loadCategories();
    this.loadProducers();
  }

  loadCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  openAddCategoryDialog() {
    const addDialog = this.dialog.open(AddCategoryComponent, {
      width: '500px'
    });

    addDialog.afterClosed().subscribe((newCategory) => {
      if (newCategory) {
        this.categories.push(newCategory);
        this.bottleForm.get('categoryId')?.setValue(newCategory.categoryId);
      }
    })
  }

  loadProducers() {
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res;
    });
  }

  openConfirmationDialog() {
    if (this.bottleForm.valid) {
      const addDialog = this.dialog.open(AddBottleDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if(res == 'confirm') {
          this.saveBottle();
        }
      });
    }
  }

  saveBottle() {
    const bottleData = {
      fullName: this.bottleForm.value.fullName,
      label: this.bottleForm.value.label,
      volume: this.bottleForm.value.volume,
      yearProduced: this.bottleForm.value.yearProduced,
      picture: this.bottleForm.value.picture,
      alcoholPercentage: this.bottleForm.value.alcoholPercentage,
      currentPrice: this.bottleForm.value.currentPrice,
      categoryDTO: {
        categoryId: this.bottleForm.value.categoryId,
      },
      producerDTO: {
        producerId: this.bottleForm.value.producerId,
      },
    };

    this.bottleService.addBottle(bottleData).subscribe(() => {
      this.router.navigate(['/dashboard/bottle']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/bottle']);
  }
}
