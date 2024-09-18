import { Component, OnInit } from '@angular/core';
import { HeadingComponent } from '../../../../../shared/heading/heading.component';
import { SearchComponent } from '../../../../../spreadsheet/search/search.component';
import { SortComponent } from '../../../../../spreadsheet/sort/sort.component';
import { FilterComponent } from '../../../../../spreadsheet/filter/filter.component';
import { NavigateButtonComponent } from '../../../../../spreadsheet/navigate-button/navigate-button.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaxRatesTableComponent } from '../tax-rates-table/tax-rates-table.component';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';

@Component({
  selector: 'app-tax-rates',
  standalone: true,
  imports: [
    HeadingComponent,
    SearchComponent,
    SortComponent,
    FilterComponent,
    NavigateButtonComponent,
    ReactiveFormsModule,
    TaxRatesTableComponent,
  ],
  templateUrl: './tax-rates.component.html',
  styleUrl: './tax-rates.component.scss',
})
export class TaxRatesComponent implements OnInit {
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
    { id: 1, title: 'الاسم', width: 300 },
    { id: 2, title: 'نوع الضريبة', width: 200 },
    { id: 3, title: 'المعدل الضريبي', width: 100 },
    { id: 4, title: 'الوصف', width: 400 },
    { id: 5, title: 'سبب إعفاء الضريبة', width: 400 },
    { id: 6, title: 'تعديل', width: 200 },
    { id: 7, title: 'حذف', width: 200 },
  ];

  ngOnInit(): void {
    this.spreadsheetService.currentData.subscribe((data) => {
      this.data = data;
    });
    this.spreadsheetService.index('tax-rates').subscribe({
      next: (res: any) => {
        this.spreadsheetService.updateData(res);
        console.log(res);
      },
    });
  }
}
