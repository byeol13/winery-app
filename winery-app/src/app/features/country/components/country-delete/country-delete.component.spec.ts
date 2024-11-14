import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDeleteComponent } from './country-delete.component';

describe('CountryDeleteComponent', () => {
  let component: CountryDeleteComponent;
  let fixture: ComponentFixture<CountryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
