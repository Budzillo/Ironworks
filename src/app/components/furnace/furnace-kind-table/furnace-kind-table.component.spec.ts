import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceKindTableComponent } from './furnace-kind-table.component';

describe('FurnaceKindTableComponent', () => {
  let component: FurnaceKindTableComponent;
  let fixture: ComponentFixture<FurnaceKindTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnaceKindTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnaceKindTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
