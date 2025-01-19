import { StoreService } from './../../../store/service/store.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BottleService } from '../../../bottle/service/bottle.service';
import { InventoryService } from '../../service/inventory.service';
import { Router } from '@angular/router';
import { Store } from '../../../../shared/models/Store.model';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { MatDialog } from '@angular/material/dialog';
import { AddInventoryDialogComponent } from '../add-inventory-dialog/add-inventory-dialog.component';

@Component({
  selector: 'app-add-inventory',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.css'
})
export class AddInventoryComponent {

  inventoryForm: FormGroup;
  stores: Store[] = [];
  bottles: Bottle[] = [];

  constructor(private fb: FormBuilder, private storeService: StoreService, private bottleService: BottleService, private inventoryService: InventoryService, private router: Router, private dialog: MatDialog){
    this.inventoryForm = this.fb.group({
      quantity: ['', Validators.required],
      storeId: ['', Validators.required],
      bottleId: ['', Validators.required]
    });

    this.loadStores();
    this.loadBottles();
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

  openConfirmationDialog() {
    if (this.inventoryForm.valid) {
      const addDialog = this.dialog.open(AddInventoryDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveInventory();
        }
      });
    }
  }

  saveInventory() {
    const newInventory = {
      quantity: this.inventoryForm.get('quantity')?.value,
      storeDTO: {
        storeId: this.inventoryForm.get('storeId')?.value
      },
      bottleDTO: {
        bottleId: this.inventoryForm.get('bottleId')?.value
      }
    };

    this.inventoryService.addInventory(newInventory).subscribe(() => {
      this.router.navigate(['/dashboard/inventory']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/inventory']);
  }

}
