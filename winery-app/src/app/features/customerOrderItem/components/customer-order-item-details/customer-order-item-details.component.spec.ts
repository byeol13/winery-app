import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderItemDetailsComponent } from './customer-order-item-details.component';

describe('CustomerOrderItemDetailsComponent', () => {
  let component: CustomerOrderItemDetailsComponent;
  let fixture: ComponentFixture<CustomerOrderItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerOrderItemDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
