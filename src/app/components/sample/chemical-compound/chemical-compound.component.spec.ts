import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalCompoundComponent } from './chemical-compound.component';

describe('ChemicalCompoundComponent', () => {
  let component: ChemicalCompoundComponent;
  let fixture: ComponentFixture<ChemicalCompoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChemicalCompoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChemicalCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
