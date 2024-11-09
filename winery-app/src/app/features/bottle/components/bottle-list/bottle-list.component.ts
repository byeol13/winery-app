import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { Bottle } from '../../../../shared/models/Bottle.model';
import { BottleService } from '../../service/bottle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottle-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatTableModule],
  templateUrl: './bottle-list.component.html',
  styleUrl: './bottle-list.component.css'
})
export class BottleListComponent implements OnInit{

  bottles: Bottle[] = [];
  displayedColumns: string[] = ['id', 'full_name', 'label', 'year_produced', 'actions'];

  constructor(private bottleService: BottleService, private router: Router){}

  ngOnInit(): void {
    this.loadAllBottles();
  }

  loadAllBottles() {
    this.bottleService.getAllBottles().subscribe((res) => {
      this.bottles = res;
    })
  }

  viewDetails(id: number) {
    this.router.navigate([`/bottle`, id]);
    console.log("This is the id === ", id);
  }
}
