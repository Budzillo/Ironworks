import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarWeightPositionListComponent } from './car-weight-position-list.component';

describe('CarWeightPositionListComponent', () => {
  let component: CarWeightPositionListComponent;
  let fixture: ComponentFixture<CarWeightPositionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarWeightPositionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarWeightPositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
