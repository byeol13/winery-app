import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBottleComponent } from './update-bottle.component';

describe('UpdateBottleComponent', () => {
  let component: UpdateBottleComponent;
  let fixture: ComponentFixture<UpdateBottleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateBottleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
