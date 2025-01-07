import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Producer } from '../../../../shared/models/Producer.model';
import { ProducerService } from '../../service/producer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-producer-details',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatTableModule, MatCardModule, MatButtonModule, RouterModule, MatIconModule],
  templateUrl: './producer-details.component.html',
  styleUrl: './producer-details.component.css'
})
export class ProducerDetailsComponent implements OnInit{

  producerId: any;
  producers: Producer | undefined;
  displayedColumns: string[] = ['id', 'producer_name', 'region_id', 'details', 'actions'];

  constructor(private producerService: ProducerService, private activatedRoute: ActivatedRoute){
    this.producerId = activatedRoute.snapshot.queryParamMap.get('producerId');
  }

  ngOnInit(): void {
    this.loadProducerById();
  }

  loadProducerById() {
    if(this.producerId) {
      this.producerService.getProducerById(this.producerId).subscribe((res) => {
        this.producers = res; 
      })
    }
  }

}

