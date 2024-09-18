import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostCentersCreatePageComponent } from './cost-centers-create-page.component';

describe('CostCentersCreatePageComponent', () => {
  let component: CostCentersCreatePageComponent;
  let fixture: ComponentFixture<CostCentersCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostCentersCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CostCentersCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
