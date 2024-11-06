import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerDetailsComponent } from './producer-details.component';

describe('ProducerDetailsComponent', () => {
  let component: ProducerDetailsComponent;
  let fixture: ComponentFixture<ProducerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducerDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
