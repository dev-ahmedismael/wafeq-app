import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HeadingComponent } from '../../../../shared/heading/heading.component';
import { CommonModule } from '@angular/common';
import { QuotesAndProformasService } from '../../../../services/quotes-and-proformas.service';
import { SpreadsheetService } from '../../../../services/spreadsheet.service';

@Component({
  selector: 'app-quotes-and-proformas',
  standalone: true,
  imports: [HeadingComponent, CommonModule],
  templateUrl: './quotes-and-proformas.component.html',
  styleUrl: './quotes-and-proformas.component.scss',
})
export class QuotesAndProformasComponent implements OnInit {
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
