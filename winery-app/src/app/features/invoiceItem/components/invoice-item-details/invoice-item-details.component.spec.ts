import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemDetailsComponent } from './invoice-item-details.component';

describe('InvoiceItemDetailsComponent', () => {
  let component: InvoiceItemDetailsComponent;
  let fixture: ComponentFixture<InvoiceItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceItemDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
