import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { noWhitespaceValidator } from '../../../shared/validators';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-information',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './company-information.component.html',
  styleUrl: './company-information.component.scss',
})
export class CompanyInformationComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  // Company Information Form
  companyInformationForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(3), noWhitespaceValidator],
    ],
    slug: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z]+$/),
        noWhitespaceValidator,
      ],
    ],
    field: ['', [Validators.required]],
    size: ['', [Validators.required]],
    vat_status: ['', [Validators.required]],
  });

  get name() {
    return this.companyInformationForm.controls['name'];
  }
  get slug() {
    return this.companyInformationForm.controls['slug'];
  }
  get field() {
    return this.companyInformationForm.controls['field'];
  }
  get size() {
    return this.companyInformationForm.controls['size'];
  }
  get vat_status() {
    return this.companyInformationForm.controls['vat_status'];
  }

  submit() {
    this.companyInformationForm.markAllAsTouched();
    let data: any = this.companyInformationForm.value;
    let tenant_id;
    if (typeof window !== 'undefined') {
      tenant_id = localStorage.getItem('tenant_id');
    }
    data.tenant_id = tenant_id;
    this.authService.sendCompanyInformation(data).subscribe({
      next: (res) => {
        this.router.navigateByUrl('/');
      },
    });
  }

  // Comapny Field Options
  companyFieldOptions = [
    { id: 1, title: 'الطب', value: 'medicine' },
    { id: 2, title: 'الهندسة', value: 'engineering' },
    { id: 3, title: 'المحاسبة', value: 'accounting' },
    { id: 4, title: 'الزراعة', value: 'agriculture' },
    { id: 5, title: 'خدمات الفنون والترفيه', value: 'art' },
    { id: 6, title: 'المقاولات - البناء', value: 'construction' },
    { id: 7, title: 'الاستشارات', value: 'consulting' },
    { id: 8, title: 'التعليم والتدريب', value: 'education' },
    { id: 9, title: 'الخدمات المالية والتأمين', value: 'finance' },
    { id: 10, title: 'الرعاية الصحية', value: 'health' },
    { id: 11, title: 'خدمات قانونية', value: 'legal' },
    { id: 12, title: 'التصنيع', value: 'manufactoring' },
    { id: 13, title: 'التسويق', value: 'marketing' },
    { id: 14, title: 'الخدمات الإدارية والدعم', value: 'administrative' },
    { id: 15, title: 'الخدمات الشخصية والجمال والعناية', value: 'beauty' },
    { id: 16, title: 'خدمات لوجستية', value: 'logistics' },
    { id: 17, title: 'خدمات العقارات', value: 'realestate' },
    { id: 18, title: 'خدمات التوظيف', value: 'employment' },
    { id: 19, title: 'خدمات الإصلاح والصيانة', value: 'maintainance' },
    { id: 20, title: 'خدمات التكنولوجيا / الإتصالات', value: 'technology' },
    { id: 21, title: 'خدمات أخرى', value: 'other' },
    { id: 22, title: 'التجارة بالتجزئة', value: 'retail' },
    { id: 23, title: 'التجارة بالجملة', value: 'wholesale' },
    { id: 24, title: 'التجارة الإلكترونية', value: 'ecommerce' },
    { id: 25, title: 'السفر والسياحة', value: 'tourism' },
    { id: 26, title: 'الفنادق والمنتجعات', value: 'hotels' },
  ];

  // Company Size Options
  companySizeOptions = [
    { id: 1, title: 'من 1 إلى 10 موظفين', value: '1-10' },
    { id: 2, title: 'من 11 إلى 100 موظف', value: '11-100' },
    { id: 3, title: 'من 101 إلى 1000 موظف', value: '101-1000' },
    { id: 4, title: 'أكثر من 1000 موظف', value: '1000' },
  ];
}
