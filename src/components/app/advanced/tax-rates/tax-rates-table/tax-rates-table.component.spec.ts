import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRatesTableComponent } from './tax-rates-table.component';

describe('TaxRatesTableComponent', () => {
  let component: TaxRatesTableComponent;
  let fixture: ComponentFixture<TaxRatesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxRatesTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxRatesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
