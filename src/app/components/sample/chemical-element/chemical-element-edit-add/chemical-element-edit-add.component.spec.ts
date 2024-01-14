import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalElementEditAddComponent } from './chemical-element-edit-add.component';

describe('ChemicalElementEditAddComponent', () => {
  let component: ChemicalElementEditAddComponent;
  let fixture: ComponentFixture<ChemicalElementEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChemicalElementEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalElementEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
