import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tax-rates-edit-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './tax-rates-edit-page.component.html',
  styleUrl: './tax-rates-edit-page.component.scss',
})
export class TaxRatesEditPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private spreadsheetService: SpreadsheetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id!: string;
  data!: any;

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
    this.spreadsheetService
      .update(this.form.value, 'tax-rates', this.id)
      .subscribe({
        next: (res: any) => {
          this.router.navigateByUrl('/tax-rates');
        },
      });
  }

  cancel() {
    this.router.navigateByUrl('/tax-rates');
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }

    // Fetch editable item
    this.spreadsheetService.show('tax-rates', this.id).subscribe({
      next: (res: any) => {
        this.data = res;
        this.form.patchValue(res);
      },
    });
  }
}
