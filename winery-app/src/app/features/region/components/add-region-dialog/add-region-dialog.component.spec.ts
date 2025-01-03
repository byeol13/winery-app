import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegionDialogComponent } from './add-region-dialog.component';

describe('AddRegionDialogComponent', () => {
  let component: AddRegionDialogComponent;
  let fixture: ComponentFixture<AddRegionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRegionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRegionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
