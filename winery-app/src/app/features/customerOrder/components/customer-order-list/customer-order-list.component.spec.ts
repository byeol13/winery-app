import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderListComponent } from './customer-order-list.component';

describe('CustomerOrderListComponent', () => {
  let component: CustomerOrderListComponent;
  let fixture: ComponentFixture<CustomerOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerOrderListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
