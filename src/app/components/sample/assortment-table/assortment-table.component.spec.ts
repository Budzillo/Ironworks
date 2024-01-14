import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortmentTableComponent } from './assortment-table.component';

describe('AssortmentTableComponent', () => {
  let component: AssortmentTableComponent;
  let fixture: ComponentFixture<AssortmentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssortmentTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssortmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
