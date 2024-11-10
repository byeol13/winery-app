import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Producer } from '../../../../shared/models/Producer.model';
import { ProducerService } from '../../service/producer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule],
  templateUrl: './producer-list.component.html',
  styleUrl: './producer-list.component.css'
})
export class ProducerListComponent implements OnInit{

  producers: Producer[] = [];
  displayedColumns: string[] = ['id', 'producer_name', 'actions'];

  constructor(private producerService: ProducerService, private router: Router){}

  ngOnInit(): void {
    this.loadAllProducers();
  }

  loadAllProducers() {
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/producer`, id]);
  }

}
