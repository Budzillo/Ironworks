import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleEditAddComponent } from './sample-edit-add.component';

describe('SampleEditAddComponent', () => {
  let component: SampleEditAddComponent;
  let fixture: ComponentFixture<SampleEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampleEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
