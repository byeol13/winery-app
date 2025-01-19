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
import { City } from '../../../../shared/models/City.model';
import { CityService } from '../../../city/service/city.service';
import { StoreService } from '../../service/store.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCityComponent } from '../../../city/components/add-city/add-city.component';
import { Store } from '../../../../shared/models/Store.model';

@Component({
  selector: 'app-update-store',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, RouterModule],
  templateUrl: './update-store.component.html',
  styleUrl: './update-store.component.css'
})
export class UpdateStoreComponent implements OnInit{

  storeForm: FormGroup;
  cities: City[] = [];
  storeId: any;
  
  constructor(private fb: FormBuilder, private cityService: CityService, private dialog: MatDialog, private storeService: StoreService, private router: Router, private activatedRoute: ActivatedRoute) {
      this.storeForm = this.fb.group({
        id: [{value: '', disabled: true}],
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

    ngOnInit(): void {
      this.storeId = this.activatedRoute.snapshot.paramMap.get('storeId');

      if(this.storeId) {
        this.storeService.getStoreById(this.storeId).subscribe((res) => {
          if (res) {
            this.storeForm.patchValue({
              id: res.storeId,
              storeName: res.storeName,
              address: res.address,
              phone: res.phone,
              mobile: res.mobile,
              email: res.email,
              details: res.details,
              cityId: res.cityDTO.cityId
            });
          }
        });
      }
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

    onSubmit() {
      if(this.storeForm.valid) {
        const updatedStore: Store = {
          storeId: this.storeId,
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

        this.storeService.updateStore(updatedStore).subscribe(() => {
          this.router.navigate(['/dashboard/store']);
        });
      }
    }
}
