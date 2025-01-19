import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegionService } from '../../../region/service/region.service';
import { ProducerService } from '../../service/producer.service';
import { Router } from '@angular/router';
import { Region } from '../../../../shared/models/Region.model';
import { AddProducerDialogComponent } from '../add-producer-dialog/add-producer-dialog.component';
import { AddRegionComponent } from '../../../region/components/add-region/add-region.component';

@Component({
  selector: 'app-add-producer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './add-producer.component.html',
  styleUrl: './add-producer.component.css'
})
export class AddProducerComponent {

  producerForm: FormGroup;
  regions: Region[] = [];

  constructor(private fb: FormBuilder, private regionService: RegionService, private dialog: MatDialog, private producerService: ProducerService, private router: Router){
    this.producerForm = this.fb.group({
      producerName: ['', Validators.required],
      details: ['', Validators.required],
      regionId: ['', Validators.required]
    });

    this.loadRegions();
  }

  loadRegions() {
    this.regionService.getAllRegions().subscribe((res) => {
      this.regions = res;
    });
  }

  openAddRegionDialog() {
    const addRegion = this.dialog.open(AddRegionComponent, {
      width: '500px'   
    });

    addRegion.afterClosed().subscribe((newRegion) => {
      if (newRegion) {
        this.regions.push(newRegion);
        this.producerForm.get('regionId')?.setValue(newRegion.regionId);
      }
    });
  }

  openConfirmationDialog() {
    if (this.producerForm.valid) {
      const addDialog = this.dialog.open(AddProducerDialogComponent, {
        width: '400px'
      });

      addDialog.afterClosed().subscribe((res) => {
        if (res === 'confirm') {
          this.saveProducer();
        }
      });
    }
  }

  saveProducer() {
    const newProducer = {
      producerName: this.producerForm.get('producerName')?.value,
      details: this.producerForm.get('details')?.value,
      regionDTO: {
        regionId: this.producerForm.get('regionId')?.value
      }
    };

    this.producerService.addProducer(newProducer).subscribe(() => {
      this.router.navigate(['/dashboard/producer']);
    })
  }

  goBack() {
    this.router.navigate(['/dashboard/producer']);
  }

}
