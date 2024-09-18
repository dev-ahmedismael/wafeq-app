import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCentersEditPageComponent } from './cost-centers-edit-page.component';

describe('CostCentersEditPageComponent', () => {
  let component: CostCentersEditPageComponent;
  let fixture: ComponentFixture<CostCentersEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCentersEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostCentersEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
