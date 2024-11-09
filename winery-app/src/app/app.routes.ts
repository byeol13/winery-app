import { Routes } from '@angular/router';
import { BottleListComponent } from './features/bottle/components/bottle-list/bottle-list.component';
import { CategoryListComponent } from './features/category/components/category-list/category-list.component';
import { CityListComponent } from './features/city/components/city-list/city-list.component';
import { CountryListComponent } from './features/country/components/country-list/country-list.component';
import { CustomerListComponent } from './features/customer/components/customer-list/customer-list.component';
import { CustomerOrderListComponent } from './features/customerOrder/components/customer-order-list/customer-order-list.component';
import { CustomerOrderItemListComponent } from './features/customerOrderItem/components/customer-order-item-list/customer-order-item-list.component';
import { EmployeeListComponent } from './features/employee/components/employee-list/employee-list.component';
import { InventoryListComponent } from './features/inventory/components/inventory-list/inventory-list.component';
import { InvoiceListComponent } from './features/invoice/components/invoice-list/invoice-list.component';
import { OrderListComponent } from './features/order/components/order-list/order-list.component';
import { OrderItemListComponent } from './features/orderItem/components/order-item-list/order-item-list.component';
import { InvoiceItemListComponent } from './features/invoiceItem/components/invoice-item-list/invoice-item-list.component';
import { ProducerListComponent } from './features/producer/components/producer-list/producer-list.component';
import { RegionListComponent } from './features/region/components/region-list/region-list.component';
import { StoreListComponent } from './features/store/components/store-list/store-list.component';
import { SupplierListComponent } from './features/supplier/components/supplier-list/supplier-list.component';
import { BottleDetailsComponent } from './features/bottle/components/bottle-details/bottle-details.component';
import { CategoryDetailsComponent } from './features/category/components/category-details/category-details.component';

export const routes: Routes = [
  {path: 'dashboard/bottle', component: BottleListComponent},
  {path: 'bottle/:id', component: BottleDetailsComponent},
  {path: 'dashboard/category', component: CategoryListComponent},
  {path: 'category/:id', component: CategoryDetailsComponent},
  {path: 'dashboard/city', component: CityListComponent},
  {path: 'dashboard/country', component: CountryListComponent},
  {path: 'dashboard/customer', component: CustomerListComponent},
  {path: 'dashboard/customerOrder', component: CustomerOrderListComponent},
  {path: 'dashboard/customerOrderItem', component: CustomerOrderItemListComponent},
  {path: 'dashboard/employee', component: EmployeeListComponent},
  {path: 'dashboard/inventory', component: InventoryListComponent},
  {path: 'dashboard/invoice', component: InvoiceListComponent},
  {path: 'dashboard/invoiceItem', component: InvoiceItemListComponent},
  {path: 'dashboard/order', component: OrderListComponent},
  {path: 'dashboard/orderItem', component: OrderItemListComponent},
  {path: 'dashboard/producer', component: ProducerListComponent},
  {path: 'dashboard/region', component: RegionListComponent},
  {path: 'dashboard/store', component: StoreListComponent},
  {path: 'dashboard/supplier', component: SupplierListComponent}
];
