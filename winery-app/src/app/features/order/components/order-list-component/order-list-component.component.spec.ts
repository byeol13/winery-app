import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListComponentComponent } from './order-list-component.component';

describe('OrderListComponentComponent', () => {
  let component: OrderListComponentComponent;
  let fixture: ComponentFixture<OrderListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
