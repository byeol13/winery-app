import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleDeleteComponent } from './bottle-delete.component';

describe('BottleDeleteComponent', () => {
  let component: BottleDeleteComponent;
  let fixture: ComponentFixture<BottleDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottleDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottleDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
