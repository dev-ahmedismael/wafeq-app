import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountsTableComponent } from './chart-of-accounts-table.component';

describe('ChartOfAccountsTableComponent', () => {
  let component: ChartOfAccountsTableComponent;
  let fixture: ComponentFixture<ChartOfAccountsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartOfAccountsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartOfAccountsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
