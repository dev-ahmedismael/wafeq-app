import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountsEditPageComponent } from './chart-of-accounts-edit-page.component';

describe('ChartOfAccountsEditPageComponent', () => {
  let component: ChartOfAccountsEditPageComponent;
  let fixture: ComponentFixture<ChartOfAccountsEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartOfAccountsEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartOfAccountsEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
