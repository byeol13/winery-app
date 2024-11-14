import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerDeleteComponent } from './producer-delete.component';

describe('ProducerDeleteComponent', () => {
  let component: ProducerDeleteComponent;
  let fixture: ComponentFixture<ProducerDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducerDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
