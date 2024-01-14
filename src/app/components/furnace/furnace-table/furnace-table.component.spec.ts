import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceTableComponent } from './furnace-table.component';

describe('FurnaceTableComponent', () => {
  let component: FurnaceTableComponent;
  let fixture: ComponentFixture<FurnaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnaceTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
