import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceTypeEditAddComponent } from './furnace-type-edit-add.component';

describe('FurnaceTypeEditAddComponent', () => {
  let component: FurnaceTypeEditAddComponent;
  let fixture: ComponentFixture<FurnaceTypeEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnaceTypeEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnaceTypeEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
