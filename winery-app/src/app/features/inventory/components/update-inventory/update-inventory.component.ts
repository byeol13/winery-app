import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '../../../../shared/models/Store.model';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { StoreService } from '../../../store/service/store.service';
import { BottleService } from '../../../bottle/service/bottle.service';
import { InventoryService } from '../../service/inventory.service';
import { MatDialog } from '@angular/material/dialog';
import { Inventory } from '../../../../shared/models/Inventory.model';

@Component({
  selector: 'app-update-inventory',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, RouterModule],
  templateUrl: './update-inventory.component.html',
  styleUrl: './update-inventory.component.css'
})
export class UpdateInventoryComponent implements OnInit{

  inventoryId: any;
  inventoryForm: FormGroup;
  stores: Store[] = [];
  bottles: Bottle[] = [];
  
    constructor(private fb: FormBuilder, private storeService: StoreService, private bottleService: BottleService, private inventoryService: InventoryService, private router: Router, private activatedRoute: ActivatedRoute){
      this.inventoryForm = this.fb.group({
        id: [{value: '', disabled: true}],
        quantity: ['', Validators.required],
        storeId: ['', Validators.required],
        bottleId: ['', Validators.required]
      });
  
      this.loadStores();
      this.loadBottles();
    }

    ngOnInit(): void {
      this.inventoryId = this.activatedRoute.snapshot.paramMap.get('inventoryId');

      if(this.inventoryId) {
        this.inventoryService.getInventoryById(this.inventoryId).subscribe((res) => {
          console.log(res);
          if(res) {
            this.inventoryForm.patchValue({
              id: res.inventoryId,
              quantity: res.quantity,
              storeId: res.storeDTO.storeId,
              bottleId: res.bottleDTO.bottleId
            });
          }
        });
      }
    }
  
    loadStores() {
      this.storeService.getAllStores().subscribe((res) => {
        this.stores = res;
      });
    }
  
    loadBottles() {
      this.bottleService.getAllBottles().subscribe((res) => {
        this.bottles = res;
      });
    }

    onSubmit() {
      if(this.inventoryForm.valid) {
        const updatedInventory: Inventory = {
          inventoryId: this.inventoryId,
          quantity: this.inventoryForm.get('quantity')?.value,
          storeDTO: {
            storeId: this.inventoryForm.get('storeId')?.value
          },
          bottleDTO: {
            bottleId: this.inventoryForm.get('bottleId')?.value
          },
        };

        this.inventoryService.updateInventory(updatedInventory).subscribe(() => {
          this.router.navigate(['/dashboard/inventory']);
        });
      }
    }
}
