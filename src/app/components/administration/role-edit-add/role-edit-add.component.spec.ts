import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleEditAddComponent } from './role-edit-add.component';

describe('RoleEditAddComponent', () => {
  let component: RoleEditAddComponent;
  let fixture: ComponentFixture<RoleEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
