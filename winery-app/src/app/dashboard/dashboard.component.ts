import { routes } from './../app.routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  routes: {path: string, label: string}[] = [
    {path: '/dashboard/bottle', label: 'Bottle'},
    {path: '/dashboard/category', label: 'Category'},
    {path: '/dashboard/city', label: 'City'},
    {path: '/dashboard/country', label: 'Country'},
    {path: '/dashboard/customer', label: 'Customer'},
    {path: '/dashboard/customerOrder', label: 'Customer Order'},
    {path: '/dashboard/customerOrderItem', label: 'Customer Order Item'},
    {path: '/dashboard/employee', label: 'Employee'},
    {path: '/dashboard/inventory', label: 'Inventory'},
    {path: '/dashboard/invoice', label: 'Invoice'},
    {path: '/dashboard/invoiceItem', label: 'Invoice Item'},
    {path: '/dashboard/order', label: 'Order'},
    {path: '/dashboard/orderItem', label: 'Order Item'},
    {path: '/dashboard/producer', label: 'Producer'},
    {path: '/dashboard/region', label: 'Region'},
    {path: '/dashboard/store', label: 'Store'},
    {path: '/dashboard/supplier', label: 'Supplier'}
  ]
  
}
