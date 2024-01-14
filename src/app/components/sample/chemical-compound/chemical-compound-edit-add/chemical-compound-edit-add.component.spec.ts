import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalCompoundEditAddComponent } from './chemical-compound-edit-add.component';

describe('ChemicalCompoundEditAddComponent', () => {
  let component: ChemicalCompoundEditAddComponent;
  let fixture: ComponentFixture<ChemicalCompoundEditAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChemicalCompoundEditAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalCompoundEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
