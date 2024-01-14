import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceKindEditAddComponent } from './furnace-kind-edit-add.component';

describe('FurnaceKindEditAddComponent', () => {
  let component: FurnaceKindEditAddComponent;
  let fixture: ComponentFixture<FurnaceKindEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FurnaceKindEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FurnaceKindEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
