import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddFurnaceComponent } from './edit-add-furnace.component';

describe('EditAddFurnaceComponent', () => {
  let component: EditAddFurnaceComponent;
  let fixture: ComponentFixture<EditAddFurnaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAddFurnaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditAddFurnaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
