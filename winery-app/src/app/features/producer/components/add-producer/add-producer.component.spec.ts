import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProducerComponent } from './add-producer.component';

describe('AddProducerComponent', () => {
  let component: AddProducerComponent;
  let fixture: ComponentFixture<AddProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProducerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
