import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderDeleteComponent } from './customer-order-delete.component';

describe('CustomerOrderDeleteComponent', () => {
  let component: CustomerOrderDeleteComponent;
  let fixture: ComponentFixture<CustomerOrderDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerOrderDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
