import { UpdateCustomerOrderComponent } from './features/customerOrder/components/update-customer-order/update-customer-order.component';
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
import { CustomerDetailsComponent } from './features/customer/components/customer-details/customer-details.component';
import { CustomerOrderDetailsComponent } from './features/customerOrder/components/customer-order-details/customer-order-details.component';
import { EmployeeDetailsComponent } from './features/employee/components/employee-details/employee-details.component';
import { InvoiceDetailsComponent } from './features/invoice/components/invoice-details/invoice-details.component';
import { OrderDetailsComponent } from './features/order/components/order-details/order-details.component';
import { ProducerDetailsComponent } from './features/producer/components/producer-details/producer-details.component';
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
import { AddCityComponent } from './features/city/components/add-city/add-city.component';
import { UpdateCityComponent } from './features/city/components/update-city/update-city.component';
import { AddRegionComponent } from './features/region/components/add-region/add-region.component';
import { UpdateRegionComponent } from './features/region/components/update-region/update-region.component';
import { AddProducerComponent } from './features/producer/components/add-producer/add-producer.component';
import { UpdateProducerComponent } from './features/producer/components/update-producer/update-producer.component';
import { AddStoreComponent } from './features/store/components/add-store/add-store.component';
import { UpdateStoreComponent } from './features/store/components/update-store/update-store.component';
import { AddInventoryComponent } from './features/inventory/components/add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './features/inventory/components/update-inventory/update-inventory.component';
import { AddOrderComponent } from './features/order/components/add-order/add-order.component';
import { UpdateOrderComponent } from './features/order/components/update-order/update-order.component';
import { AddInvoiceComponent } from './features/invoice/components/add-invoice/add-invoice.component';
import { UpdateInvoiceComponent } from './features/invoice/components/update-invoice/update-invoice.component';
import { AddOrderItemComponent } from './features/orderItem/components/add-order-item/add-order-item.component';
import { AddInvoiceItemComponent } from './features/invoiceItem/components/add-invoice-item/add-invoice-item.component';
import { AddCustomerOrderComponent } from './features/customerOrder/components/add-customer-order/add-customer-order.component';
import { AddCustomerOrderItemComponent } from './features/customerOrderItem/components/add-customer-order-item/add-customer-order-item.component';

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
  {path: 'addCity', component: AddCityComponent},
  {path: 'updateCity/:cityId', component: UpdateCityComponent},
  {path: 'dashboard/country', component: CountryListComponent},
  {path: 'addCountry', component: AddCountryComponent},
  {path: 'updateCountry/:countryId', component: UpdateCountryComponent},
  {path: 'dashboard/customer', component: CustomerListComponent},
  {path: 'customer', component: CustomerDetailsComponent},
  {path: 'addCustomer', component: AddCustomerComponent},
  {path: 'updateCustomer/:customerId', component: UpdateCustomerComponent},
  {path: 'dashboard/customerOrder', component: CustomerOrderListComponent},
  {path: 'customerOrder', component: CustomerOrderDetailsComponent},
  {path: 'addCustomerOrder', component: AddCustomerOrderComponent},
  {path: 'updateCustomerOrder/:customerOrderId', component: UpdateCustomerOrderComponent},
  {path: 'dashboard/customerOrderItem', component: CustomerOrderItemListComponent},
  {path: 'addCustomerOrderItem/:customerOrderId', component: AddCustomerOrderItemComponent},
  {path: 'dashboard/employee', component: EmployeeListComponent},
  {path: 'employee', component: EmployeeDetailsComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'updateEmployee/:employeeId', component: UpdateEmployeeComponent},
  {path: 'dashboard/inventory', component: InventoryListComponent},
  {path: 'addInventory', component: AddInventoryComponent},
  {path: 'updateInventory/:inventoryId', component: UpdateInventoryComponent},
  {path: 'dashboard/invoice', component: InvoiceListComponent},
  {path: 'invoice', component: InvoiceDetailsComponent},
  {path: 'addInvoice', component: AddInvoiceComponent},
  {path: 'updateInvoice/:invoiceId', component: UpdateInvoiceComponent},
  {path: 'dashboard/invoiceItem', component: InvoiceItemListComponent},
  {path: 'addInvoiceItem/:invoiceId', component: AddInvoiceItemComponent},
  {path: 'dashboard/order', component: OrderListComponent},
  {path: 'order', component: OrderDetailsComponent},
  {path: 'addOrder', component: AddOrderComponent},
  {path: 'updateOrder/:orderId', component: UpdateOrderComponent},
  {path: 'dashboard/orderItem', component: OrderItemListComponent},
  {path: 'addOrderItem/:orderId', component: AddOrderItemComponent},
  {path: 'dashboard/producer', component: ProducerListComponent},
  {path: 'producer', component: ProducerDetailsComponent},
  {path: 'addProducer', component: AddProducerComponent},
  {path: 'updateProducer/:producerId', component: UpdateProducerComponent},
  {path: 'dashboard/region', component: RegionListComponent},
  {path: 'addRegion', component: AddRegionComponent},
  {path: 'updateRegion/:regionId', component: UpdateRegionComponent},
  {path: 'dashboard/store', component: StoreListComponent},
  {path: 'store', component: StoreDetailsComponent},
  {path: 'addStore', component: AddStoreComponent},
  {path: 'updateStore/:storeId', component: UpdateStoreComponent},
  {path: 'dashboard/supplier', component: SupplierListComponent},
  {path: 'supplier', component: SupplierDetailsComponent},
  {path: 'addSupplier', component: AddSupplierComponent},
  {path: 'updateSupplier/:supplierId', component: UpdateSupplierComponent}
];
