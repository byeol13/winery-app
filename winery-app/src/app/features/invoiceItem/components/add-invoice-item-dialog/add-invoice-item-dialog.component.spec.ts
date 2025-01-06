import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceItemDialogComponent } from './add-invoice-item-dialog.component';

describe('AddInvoiceItemDialogComponent', () => {
  let component: AddInvoiceItemDialogComponent;
  let fixture: ComponentFixture<AddInvoiceItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddInvoiceItemDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInvoiceItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
