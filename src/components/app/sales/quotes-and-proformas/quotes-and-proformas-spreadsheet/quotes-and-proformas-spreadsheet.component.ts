import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../../../../shared/heading/heading.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CellComponent } from '../../../../../spreadsheet/cell/cell.component';
import { QuotesAndProformasService } from '../../../../../services/quotes-and-proformas.service';
import { MainMenuComponent } from '../../../../../spreadsheet/context-menu/main-menu/main-menu.component';
import { RowComponent } from '../../../../../spreadsheet/row/row.component';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';
import { SpreadsheetComponent } from '../../../../../spreadsheet/spreadsheet/spreadsheet.component';

@Component({
  selector: 'app-quotes-and-proformas-spreadsheet',
  standalone: true,
  imports: [
    HeadingComponent,
    CommonModule,
    ReactiveFormsModule,
    RowComponent,
    CellComponent,
    MainMenuComponent,
    SpreadsheetComponent,
  ],
  templateUrl: './quotes-and-proformas-spreadsheet.component.html',
  styleUrl: './quotes-and-proformas-spreadsheet.component.scss',
})
export class QuotesAndProformasSpreadsheetComponent implements OnInit {
  constructor(
    private quotesAndProformasService: QuotesAndProformasService,
    protected spreadsheetService: SpreadsheetService
  ) {}

  headers = [
    'الحالة',
    'المرفقات',
    'رقم',
    'التاريخ',
    'العميل',
    'العملة',
    'إجمالي العرض',
    'المنتج',
    'وصف العنصر',
    'الكمية',
    'السعر',
    'المعدل الضريبي',
    'الخصم',
    'المجموع',
    'المرجع',
    'المشروع',
    'الملاحظات',
    'مستند هوية العرض',
    'تاريخ الإنشاء',
    'تاريخ التعديل',
  ];
  data!: any;

  ngOnInit(): void {
    this.quotesAndProformasService.getQuotesAndProformas().subscribe({
      next: (res: any) => {
        this.data = res;
        console.log(res);
      },
    });
  }
}
