import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { BottleService } from '../../service/bottle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bottle-details',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatToolbarModule, MatCardModule],
  templateUrl: './bottle-details.component.html',
  styleUrl: './bottle-details.component.css'
})
export class BottleDetailsComponent implements OnInit{

  bottleId: any;
  bottles: Bottle | undefined;
  displayedColumns: string[] = ['id', 'full_name', 'label', 'category_id', 'volume', 'year_produced', 'producer_id', 'picture', 'alcohol_percentage', 'current_price'];

  constructor(private bottleService: BottleService, private activatedRoute: ActivatedRoute, private router: Router){
    this.bottleId = activatedRoute.snapshot.paramMap.get('id');
    console.log("got the id", this.bottleId);
  }

  ngOnInit(): void {
    this.loadBottleById();
  }

  loadBottleById() {
    if(this.bottleId) {
      this.bottleService.getBottleById(this.bottleId).subscribe((res) => {
        this.bottles = res;
      })
    }
  }

}

