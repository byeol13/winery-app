import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerOrderItemDialogComponent } from './add-customer-order-item-dialog.component';

describe('AddCustomerOrderItemDialogComponent', () => {
  let component: AddCustomerOrderItemDialogComponent;
  let fixture: ComponentFixture<AddCustomerOrderItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerOrderItemDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerOrderItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
