import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoreDialogComponent } from './add-store-dialog.component';

describe('AddStoreDialogComponent', () => {
  let component: AddStoreDialogComponent;
  let fixture: ComponentFixture<AddStoreDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStoreDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
