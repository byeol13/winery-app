import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducerDialogComponent } from './add-producer-dialog.component';

describe('AddProducerDialogComponent', () => {
  let component: AddProducerDialogComponent;
  let fixture: ComponentFixture<AddProducerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProducerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProducerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
