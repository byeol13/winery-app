import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Category } from '../../../../shared/models/Category.model';
import { Producer } from '../../../../shared/models/Producer.model';
import { CategoryService } from '../../../category/service/category.service';
import { ProducerService } from '../../../producer/service/producer.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BottleService } from '../../service/bottle.service';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../../../category/components/add-category/add-category.component';

@Component({
  selector: 'app-update-bottle',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, RouterModule],
  templateUrl: './update-bottle.component.html',
  styleUrl: './update-bottle.component.css'
})
export class UpdateBottleComponent implements OnInit{

  bottleId: any;
  bottleForm: FormGroup;
  categories: Category[] = [];
  producers: Producer[] = [];

  constructor(private fb: FormBuilder, private categoryService: CategoryService, private producerService: ProducerService, private activatedRoute: ActivatedRoute, private bottleService: BottleService, private router: Router, private dialog: MatDialog){

    this.bottleForm = this.fb.group({
          id: [{value: '', disabled: true}],
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

  ngOnInit(): void {
    this.bottleId = this.activatedRoute.snapshot.paramMap.get('bottleId');

    if(this.bottleId) {
      this.bottleService.getBottleById(this.bottleId).subscribe((bottle) => {
        if(bottle) {
          this.bottleForm.patchValue(
            {
            id: bottle.bottleId,
            fullName: bottle.fullName,
            label: bottle.label,
            volume: bottle.volume,
            yearProduced: bottle.yearProduced,
            picture: bottle.picture,
            alcoholPercentage: bottle.alcoholPercentage,
            currentPrice: bottle.currentPrice,
            categoryId: bottle.categoryDTO?.categoryId,
            producerId: bottle.producerDTO?.producerId
          });
        }
      });
    }
  }

  onSubmit() {
    if(this.bottleForm.valid) {

      const updatedBottle: Bottle = {
        bottleId: this.bottleId,
        fullName: this.bottleForm.get('fullName')?.value,
        label: this.bottleForm.get('label')?.value,
        volume: this.bottleForm.get('volume')?.value,
        yearProduced: this.bottleForm.get('yearProduced')?.value,
        picture: this.bottleForm.get('picture')?.value,
        alcoholPercentage: this.bottleForm.get('alcoholPercentage')?.value,
        currentPrice: this.bottleForm.get('currentPrice')?.value,
        categoryDTO: {
          categoryId: this.bottleForm.get('categoryId')?.value
        },
        producerDTO: {
          producerId: this.bottleForm.get('producerId')?.value
        }
      };

      this.bottleService.updateBottle(updatedBottle).subscribe(() => {
        this.router.navigate(['/dashboard/bottle']);
      });
    }
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

  loadCategories() {
    this.categoryService.getAllCategories().subscribe((res) => {
      this.categories = res;
    })
  }

  loadProducers() {
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res;
    })
  }

}
