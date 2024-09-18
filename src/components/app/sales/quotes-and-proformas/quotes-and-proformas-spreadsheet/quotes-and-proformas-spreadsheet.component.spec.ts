import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAndProformasSpreadsheetComponent } from './quotes-and-proformas-spreadsheet.component';

describe('QuotesAndProformasSpreadsheetComponent', () => {
  let component: QuotesAndProformasSpreadsheetComponent;
  let fixture: ComponentFixture<QuotesAndProformasSpreadsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesAndProformasSpreadsheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuotesAndProformasSpreadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
