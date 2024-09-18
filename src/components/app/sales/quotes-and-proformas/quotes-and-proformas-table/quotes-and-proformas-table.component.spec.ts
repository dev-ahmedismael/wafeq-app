import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAndProformasTableComponent } from './quotes-and-proformas-table.component';

describe('QuotesAndProformasTableComponent', () => {
  let component: QuotesAndProformasTableComponent;
  let fixture: ComponentFixture<QuotesAndProformasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesAndProformasTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuotesAndProformasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
