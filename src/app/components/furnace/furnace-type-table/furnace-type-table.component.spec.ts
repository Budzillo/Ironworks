import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceTypeTableComponent } from './furnace-type-table.component';

describe('FurnaceTypeTableComponent', () => {
  let component: FurnaceTypeTableComponent;
  let fixture: ComponentFixture<FurnaceTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnaceTypeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnaceTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
