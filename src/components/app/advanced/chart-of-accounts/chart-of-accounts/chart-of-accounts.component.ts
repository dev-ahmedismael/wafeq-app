import { Component } from '@angular/core';
import { HeadingComponent } from '../../../../../shared/heading/heading.component';
import { SearchComponent } from '../../../../../spreadsheet/search/search.component';
import { SortComponent } from '../../../../../spreadsheet/sort/sort.component';
import { FilterComponent } from '../../../../../spreadsheet/filter/filter.component';
import { NavigateButtonComponent } from '../../../../../spreadsheet/navigate-button/navigate-button.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChartOfAccountsTableComponent } from '../chart-of-accounts-table/chart-of-accounts-table.component';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';

@Component({
  selector: 'app-chart-of-accounts',
  standalone: true,
  imports: [
    HeadingComponent,
    SearchComponent,
    SortComponent,
    FilterComponent,
    NavigateButtonComponent,
    ReactiveFormsModule,
    ChartOfAccountsTableComponent,
  ],
  templateUrl: './chart-of-accounts.component.html',
  styleUrl: './chart-of-accounts.component.scss',
})
export class ChartOfAccountsComponent {
  constructor(
    private spreadsheetService: SpreadsheetService,
    private fb: FormBuilder
  ) {}

  // Sort
  sortItems = [
    {
      col: 'name',
      title: 'الاسم',
      ascending: 'تصاعدي',
      descending: 'تنازلي',
    },
    {
      col: 'tax_type',
      title: 'نوع الضريبة',
      ascending: 'تصاعدي',
      descending: 'تنازلي',
    },
  ];

  // Filter
  filterForm = this.fb.group({
    tax_type: '',
  });

  reset() {
    this.filterForm.reset();
  }

  submit() {
    this.spreadsheetService
      .filter(this.filterForm.value, 'tax-rates')
      .subscribe({
        next: (res: any) => {
          this.spreadsheetService.updateData(res);
        },
      });
  }

  data!: any;

  tableHeaders = [
    { id: 1, title: 'الفئة' },
    {
      id: 2,
      title: 'النوع',
    },
    { id: 3, title: 'الكود' },
    { id: 4, title: 'اسم الحساب' },
    { id: 5, title: 'النوع' },
    { id: 6, title: 'النشاط' },
    { id: 7, title: 'مدين' },
    { id: 8, title: 'دائن' },
    { id: 9, title: 'تفعيل المدفوعات' },
    { id: 10, title: 'إظهار في مطالبات المصروفات' },
    { id: 11, title: 'تعديل' },
    { id: 12, title: 'حذف' },
  ];

  ngOnInit(): void {
    this.spreadsheetService.currentData.subscribe((data) => {
      this.data = data;
    });
    this.spreadsheetService.index('account-categories').subscribe({
      next: (res: any) => {
        this.spreadsheetService.updateData(res);
        console.log(res);
      },
    });
  }
}
