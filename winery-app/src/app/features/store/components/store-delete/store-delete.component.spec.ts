import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDeleteComponent } from './store-delete.component';

describe('StoreDeleteComponent', () => {
  let component: StoreDeleteComponent;
  let fixture: ComponentFixture<StoreDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
