import { Component, OnInit, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Producer } from '../../../../shared/models/Producer.model';
import { ProducerService } from '../../service/producer.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProducerDeleteComponent } from '../producer-delete/producer-delete.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-producer-list',
  standalone: true,
  imports: [MatToolbarModule, MatTableModule, MatButtonModule, CommonModule, ProducerDeleteComponent, RouterModule, MatPaginatorModule],
  templateUrl: './producer-list.component.html',
  styleUrl: './producer-list.component.css'
})
export class ProducerListComponent implements OnInit{

  producerIdToDelete: number | undefined;
  producers: Producer[] = [];
  displayedColumns: string[] = ['id', 'producer_name', 'region_id', 'actions'];
  showDeleteDialog = false;

  totalProducers: number = 0;
  displayedProducers: Producer[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private producerService: ProducerService, private router: Router){}

  ngOnInit(): void {
    this.loadAllProducers();
  }

  loadAllProducers() {
    this.producerService.getAllProducers().subscribe((res) => {
      this.producers = res;
      this.totalProducers = this.producers.length;
      this.paginatedProducers();
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/producer`], {queryParams: { producerId: id}});
  }

  openDeleteDialog(id: number) {
    this.producerIdToDelete = id;
    this.showDeleteDialog = true;
  }

  deleteProducerById(id: number) {
    this.producerService.deleteProducerById(id).subscribe(() => {
      this.loadAllProducers();
      this.showDeleteDialog = false;
    })
  }

  cancel() {
    this.showDeleteDialog = false;
  }

  paginatedProducers() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    this.displayedProducers = this.producers.slice(startIndex, startIndex + this.paginator.pageSize);
  }

}
