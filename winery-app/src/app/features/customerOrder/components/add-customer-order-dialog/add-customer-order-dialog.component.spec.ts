import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerOrderDialogComponent } from './add-customer-order-dialog.component';

describe('AddCustomerOrderDialogComponent', () => {
  let component: AddCustomerOrderDialogComponent;
  let fixture: ComponentFixture<AddCustomerOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCustomerOrderDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
