import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountsCreatePageComponent } from './chart-of-accounts-create-page.component';

describe('ChartOfAccountsCreatePageComponent', () => {
  let component: ChartOfAccountsCreatePageComponent;
  let fixture: ComponentFixture<ChartOfAccountsCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartOfAccountsCreatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartOfAccountsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
