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
import { Region } from '../../../../shared/models/Region.model';
import { RegionService } from '../../../region/service/region.service';
import { ProducerService } from '../../service/producer.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRegionComponent } from '../../../region/components/add-region/add-region.component';
import { Producer } from '../../../../shared/models/Producer.model';

@Component({
  selector: 'app-update-producer',
  standalone: true,
  imports: [MatToolbarModule, CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule, MatCardModule, RouterModule],
  templateUrl: './update-producer.component.html',
  styleUrl: './update-producer.component.css'
})
export class UpdateProducerComponent implements OnInit{

  producerId: any;
  producerForm: FormGroup;
  regions: Region[] = [];

  constructor(private fb: FormBuilder, private regionService: RegionService, private activatedRoute: ActivatedRoute, private producerService: ProducerService, private router: Router, private dialog: MatDialog){

    this.producerForm = this.fb.group({
      id: [{value: '', disabled: true}],
      producerName: ['', Validators.required],
      details: ['', Validators.required],
      regionId: ['', Validators.required]
    });

    this.loadRegions();
  }

  ngOnInit(): void {
    this.producerId = this.activatedRoute.snapshot.paramMap.get('producerId');

    if (this.producerId) {
      this.producerService.getProducerById(this.producerId).subscribe((res) => {
        if (res) {
          this.producerForm.patchValue({
            id: res.producerId,
            producerName: res.producerName,
            details: res.details,
            regionId: res.regionDTO.regionId
          });
        }
      });
    }
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

  onSubmit() {
    if(this.producerForm.valid) {
      const updatedProducer: Producer = {
        producerId: this.producerId,
        producerName: this.producerForm.get('producerName')?.value,
        details: this.producerForm.get('details')?.value,
        regionDTO: {
          regionId: this.producerForm.get('regionId')?.value
        }
      };

      this.producerService.updateProducer(updatedProducer).subscribe(() => {
        this.router.navigate(['/dashboard/producer']);
      });
    }
  }
}
