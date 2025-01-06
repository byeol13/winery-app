import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceItemComponent } from './add-invoice-item.component';

describe('AddInvoiceItemComponent', () => {
  let component: AddInvoiceItemComponent;
  let fixture: ComponentFixture<AddInvoiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvoiceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
