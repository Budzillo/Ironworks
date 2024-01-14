import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionEditAddComponent } from './permission-edit-add.component';

describe('PermissionEditAddComponent', () => {
  let component: PermissionEditAddComponent;
  let fixture: ComponentFixture<PermissionEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PermissionEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
