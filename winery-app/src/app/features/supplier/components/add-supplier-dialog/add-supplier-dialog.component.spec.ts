import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierDialogComponent } from './add-supplier-dialog.component';

describe('AddSupplierDialogComponent', () => {
  let component: AddSupplierDialogComponent;
  let fixture: ComponentFixture<AddSupplierDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSupplierDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupplierDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
