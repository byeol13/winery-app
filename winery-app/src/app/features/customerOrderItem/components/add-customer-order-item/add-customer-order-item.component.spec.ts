import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerOrderItemComponent } from './add-customer-order-item.component';

describe('AddCustomerOrderItemComponent', () => {
  let component: AddCustomerOrderItemComponent;
  let fixture: ComponentFixture<AddCustomerOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerOrderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
