import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceItemListComponent } from './invoice-item-list.component';

describe('InvoiceItemListComponent', () => {
  let component: InvoiceItemListComponent;
  let fixture: ComponentFixture<InvoiceItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
