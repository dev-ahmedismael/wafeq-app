import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAndProformasComponent } from './quotes-and-proformas.component';

describe('QuotesAndProformasComponent', () => {
  let component: QuotesAndProformasComponent;
  let fixture: ComponentFixture<QuotesAndProformasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuotesAndProformasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuotesAndProformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
