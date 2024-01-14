import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWeightListComponent } from './car-weight-list.component';

describe('CarWeightListComponent', () => {
  let component: CarWeightListComponent;
  let fixture: ComponentFixture<CarWeightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarWeightListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarWeightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
