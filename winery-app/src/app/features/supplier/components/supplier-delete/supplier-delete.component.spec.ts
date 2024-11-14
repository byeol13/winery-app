import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDeleteComponent } from './supplier-delete.component';

describe('SupplierDeleteComponent', () => {
  let component: SupplierDeleteComponent;
  let fixture: ComponentFixture<SupplierDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
