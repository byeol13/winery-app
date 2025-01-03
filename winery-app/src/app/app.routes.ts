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
import { CityDetailsComponent } from './features/city/components/city-details/city-details.component';
import { CountryDetailsComponent } from './features/country/components/country-details/country-details.component';
import { CustomerDetailsComponent } from './features/customer/components/customer-details/customer-details.component';
import { CustomerOrderDetailsComponent } from './features/customerOrder/components/customer-order-details/customer-order-details.component';
import { CustomerOrderItemDetailsComponent } from './features/customerOrderItem/components/customer-order-item-details/customer-order-item-details.component';
import { EmployeeDetailsComponent } from './features/employee/components/employee-details/employee-details.component';
import { InventoryDetailsComponent } from './features/inventory/components/inventory-details/inventory-details.component';
import { InvoiceDetailsComponent } from './features/invoice/components/invoice-details/invoice-details.component';
import { InvoiceItemDetailsComponent } from './features/invoiceItem/components/invoice-item-details/invoice-item-details.component';
import { OrderDetailsComponent } from './features/order/components/order-details/order-details.component';
import { OrderItemDetailsComponent } from './features/orderItem/components/order-item-details/order-item-details.component';
import { ProducerDetailsComponent } from './features/producer/components/producer-details/producer-details.component';
import { RegionDetailsComponent } from './features/region/components/region-details/region-details.component';
import { StoreDetailsComponent } from './features/store/components/store-details/store-details.component';
import { SupplierDetailsComponent } from './features/supplier/components/supplier-details/supplier-details.component';
import { AddBottleComponent } from './features/bottle/components/add-bottle/add-bottle.component';
import { UpdateBottleComponent } from './features/bottle/components/update-bottle/update-bottle.component';
import { AddCategoryComponent } from './features/category/components/add-category/add-category.component';
import { AddCountryComponent } from './features/country/components/add-country/add-country.component';
import { UpdateCategoryComponent } from './features/category/components/update-category/update-category.component';
import { UpdateCountryComponent } from './features/country/components/update-country/update-country.component';
import { AddCustomerComponent } from './features/customer/components/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './features/customer/components/update-customer/update-customer.component';
import { AddEmployeeComponent } from './features/employee/components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './features/employee/components/update-employee/update-employee.component';
import { AddSupplierComponent } from './features/supplier/components/add-supplier/add-supplier.component';
import { UpdateSupplierComponent } from './features/supplier/components/update-supplier/update-supplier.component';

export const routes: Routes = [
  {path: 'dashboard/bottle', component: BottleListComponent},
  {path: 'bottle', component: BottleDetailsComponent},
  {path: 'addBottle', component: AddBottleComponent},
  {path: 'updateBottle/:bottleId', component: UpdateBottleComponent},
  {path: 'dashboard/category', component: CategoryListComponent},
  {path: 'category', component: CategoryDetailsComponent},
  {path: 'addCategory', component: AddCategoryComponent},
  {path: 'updateCategory/:categoryId', component: UpdateCategoryComponent},
  {path: 'dashboard/city', component: CityListComponent},
  {path: 'city', component: CityDetailsComponent},
  {path: 'dashboard/country', component: CountryListComponent},
  {path: 'country', component: CountryDetailsComponent},
  {path: 'addCountry', component: AddCountryComponent},
  {path: 'updateCountry/:countryId', component: UpdateCountryComponent},
  {path: 'dashboard/customer', component: CustomerListComponent},
  {path: 'customer', component: CustomerDetailsComponent},
  {path: 'addCustomer', component: AddCustomerComponent},
  {path: 'updateCustomer/:customerId', component: UpdateCustomerComponent},
  {path: 'dashboard/customerOrder', component: CustomerOrderListComponent},
  {path: 'customerOrder', component: CustomerOrderDetailsComponent},
  {path: 'dashboard/customerOrderItem', component: CustomerOrderItemListComponent},
  {path: 'customerOrderItem', component: CustomerOrderItemDetailsComponent},
  {path: 'dashboard/employee', component: EmployeeListComponent},
  {path: 'employee', component: EmployeeDetailsComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'updateEmployee/:employeeId', component: UpdateEmployeeComponent},
  {path: 'dashboard/inventory', component: InventoryListComponent},
  {path: 'inventory', component: InventoryDetailsComponent},
  {path: 'dashboard/invoice', component: InvoiceListComponent},
  {path: 'invoice', component: InvoiceDetailsComponent},
  {path: 'dashboard/invoiceItem', component: InvoiceItemListComponent},
  {path: 'invoiceItem', component: InvoiceItemDetailsComponent},
  {path: 'dashboard/order', component: OrderListComponent},
  {path: 'order', component: OrderDetailsComponent},
  {path: 'dashboard/orderItem', component: OrderItemListComponent},
  {path: 'orderItem', component: OrderItemDetailsComponent},
  {path: 'dashboard/producer', component: ProducerListComponent},
  {path: 'producer', component: ProducerDetailsComponent},
  {path: 'dashboard/region', component: RegionListComponent},
  {path: 'region', component: RegionDetailsComponent},
  {path: 'dashboard/store', component: StoreListComponent},
  {path: 'store', component: StoreDetailsComponent},
  {path: 'dashboard/supplier', component: SupplierListComponent},
  {path: 'supplier', component: SupplierDetailsComponent},
  {path: 'addSupplier', component: AddSupplierComponent},
  {path: 'updateSupplier/:supplierId', component: UpdateSupplierComponent}
];
