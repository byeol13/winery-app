import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBottleDialogComponent } from './add-bottle-dialog.component';

describe('AddBottleDialogComponent', () => {
  let component: AddBottleDialogComponent;
  let fixture: ComponentFixture<AddBottleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBottleDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBottleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
