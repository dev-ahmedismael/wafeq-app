import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chart-of-accounts-create-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './chart-of-accounts-create-page.component.html',
  styleUrl: './chart-of-accounts-create-page.component.scss',
})
export class ChartOfAccountsCreatePageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private spreadsheetService: SpreadsheetService,
    private router: Router
  ) {}

  accountTypes!: any;
  activities = ['نقد', 'التشغيلات', 'التمويلات', 'الاستثمارات'];

  form = this.fb.group({
    code: ['', Validators.required, Validators.pattern('^[0-9]*$')],
    account_name: ['', Validators.required],
    type: ['', Validators.required],
    activity: ['', Validators.required],
    enable_payments: ['1', Validators.required],
    show_in_expense_claim: ['1', Validators.required],
  });

  get code() {
    return this.form.controls['code'];
  }

  submit() {
    let account_category_id;
    for (const type of this.accountTypes) {
      for (const t of type.types) {
        if (t.title == this.form.controls['type'].value) {
          account_category_id = t.id;
        }
      }
    }

    let data: any = this.form.value;
    data.account_category_id = account_category_id;

    this.spreadsheetService.store(data, 'chart-of-accounts').subscribe({
      next: (res: any) => {
        this.router.navigateByUrl('/chart-of-accounts');
      },
    });
  }

  cancel() {
    this.router.navigateByUrl('/chart-of-accounts');
  }

  ngOnInit(): void {
    this.spreadsheetService.index('account-categories').subscribe({
      next: (res: any) => {
        this.accountTypes = res;
      },
    });
  }
}
