import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemDeleteComponent } from './invoice-item-delete.component';

describe('InvoiceItemDeleteComponent', () => {
  let component: InvoiceItemDeleteComponent;
  let fixture: ComponentFixture<InvoiceItemDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceItemDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceItemDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
