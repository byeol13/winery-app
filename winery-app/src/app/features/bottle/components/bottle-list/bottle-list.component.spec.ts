import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleListComponent } from './bottle-list.component';

describe('BottleListComponent', () => {
  let component: BottleListComponent;
  let fixture: ComponentFixture<BottleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
