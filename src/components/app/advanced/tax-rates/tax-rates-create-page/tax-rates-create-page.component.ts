import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';

@Component({
  selector: 'app-tax-rates-create-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tax-rates-create-page.component.html',
  styleUrl: './tax-rates-create-page.component.scss',
})
export class TaxRatesCreatePageComponent {
  constructor(
    private fb: FormBuilder,
    private spreadsheetService: SpreadsheetService,
    private router: Router
  ) {}
  form = this.fb.group({
    name: ['', Validators.required],
    tax_type: ['', Validators.required],
    tax_rate: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    description: '',
  });

  taxRates = ['مبيعات', 'مشتريات', 'إحتساب عكسي', 'غير خاضع للضريبة'];

  get tax_rate() {
    return this.form.controls['tax_rate'];
  }

  submit() {
    this.spreadsheetService.store(this.form.value, 'tax-rates').subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/tax-rates');
      },
    });
  }

  cancel() {
    this.router.navigateByUrl('/tax-rates');
  }
}
