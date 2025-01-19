import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { City } from '../../../../shared/models/City.model';
import { CityService } from '../../../city/service/city.service';
import { MatDialog } from '@angular/material/dialog';
import { StoreService } from '../../service/store.service';
import { Router } from '@angular/router';
import { AddStoreDialogComponent } from '../add-store-dialog/add-store-dialog.component';
import { AddCityComponent } from '../../../city/components/add-city/add-city.component';

@Component({
  selector: 'app-add-store',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-store.component.html',
  styleUrl: './add-store.component.css'
})
export class AddStoreComponent {

  storeForm: FormGroup;
  cities: City[] = [];

  constructor(private fb: FormBuilder, private cityService: CityService, private dialog: MatDialog, private storeService: StoreService, private router: Router) {
    this.storeForm = this.fb.group({
      storeName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      details: ['', Validators.required],
      cityId: ['', Validators.required]
    });

    this.loadCities();
  }

  loadCities() {
    this.cityService.getAllCities().subscribe((res) => {
      this.cities = res;
    });
  }

  openAddCityDialog() {
    const addCity = this.dialog.open(AddCityComponent, {
      width: '500px'   
    });
    
    addCity.afterClosed().subscribe((newCity) => {
      if (newCity) {
        this.cities.push(newCity);
        this.storeForm.get('cityId')?.setValue(newCity.cityId);
      }
    });
  }

  openConfirmationDialog() {
    if (this.storeForm.valid) {
      const addDialog = this.dialog.open(AddStoreDialogComponent, {
        width: '500px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveStore();
        }
      });
    }
  }

  saveStore() {
    const newStore = {
      storeName: this.storeForm.get('storeName')?.value,
      address: this.storeForm.get('address')?.value,
      phone: this.storeForm.get('phone')?.value,
      mobile: this.storeForm.get('mobile')?.value,
      email: this.storeForm.get('email')?.value,
      details: this.storeForm.get('details')?.value,
      cityDTO: {
        cityId: this.storeForm.get('cityId')?.value
      }
    };

    this.storeService.addStore(newStore).subscribe(() => {
      this.router.navigate(['/dashboard/store']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/store']);
  }

}
