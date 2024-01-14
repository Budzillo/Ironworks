import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGroupEditAddComponent } from './material-group-edit-add.component';

describe('MaterialGroupEditAddComponent', () => {
  let component: MaterialGroupEditAddComponent;
  let fixture: ComponentFixture<MaterialGroupEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialGroupEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialGroupEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
