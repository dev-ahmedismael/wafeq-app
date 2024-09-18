import { Routes } from '@angular/router';
import { RegisterComponent } from '../components/getting-started/register/register.component';
import { ProfileInformationComponent } from '../components/getting-started/profile-information/profile-information.component';
import { CompanyInformationComponent } from '../components/getting-started/company-information/company-information.component';
import { AppLayoutComponent } from '../layouts/app-layout/app-layout.component';
import { GettingStartedComponent } from '../components/getting-started/getting-started.component';
import { InboxComponent } from '../components/app/inbox/inbox.component';
import { ChartOfAccountsComponent } from '../components/app/advanced/chart-of-accounts/chart-of-accounts/chart-of-accounts.component';
import { ChartOfAccountsCreatePageComponent } from '../components/app/advanced/chart-of-accounts/chart-of-accounts-create-page/chart-of-accounts-create-page.component';
import { ChartOfAccountsEditPageComponent } from '../components/app/advanced/chart-of-accounts/chart-of-accounts-edit-page/chart-of-accounts-edit-page.component';
import { TaxRatesComponent } from '../components/app/advanced/tax-rates/tax-rates/tax-rates.component';
import { TaxRatesCreatePageComponent } from '../components/app/advanced/tax-rates/tax-rates-create-page/tax-rates-create-page.component';
import { TaxRatesEditPageComponent } from '../components/app/advanced/tax-rates/tax-rates-edit-page/tax-rates-edit-page.component';
import { CostCentersComponent } from '../components/app/cost-centers/cost-centers/cost-centers.component';

export const routes: Routes = [
  // Getting Started
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', redirectTo: 'register', pathMatch: 'full' },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'profile-information',
        component: ProfileInformationComponent,
      },
      {
        path: 'company-information',
        component: CompanyInformationComponent,
      },
    ],
  },

  // App
  {
    path: '',
    component: AppLayoutComponent,
    pathMatch: 'prefix',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inbox' },
      {
        path: 'inbox',
        component: InboxComponent,
        data: { breadcrumb: 'البريد الإلكتروني' },
        title: 'البريد الإلكتروني',
      },

      // ******************* Cost Centers ******************* \\
      {
        path: 'cost-centers',
        component: CostCentersComponent,
        data: { breadcrumb: 'مراكز التكلفة' },
        title: '',
      },
      {
        path: 'cost-centers/create',
        component: CostCentersComponent,
        data: { breadcrumb: 'إضافة مركز تكلفة' },
        title: 'إضافة مركز تكلفة',
      },
      {
        path: 'cost-centers/edit/:id',
        component: CostCentersComponent,
        data: { breadcrumb: 'تعديل مركز التكلفة' },
        title: 'تعديل مركز التكلفة',
      },

      // ******************* Advanced ******************* \\
      // Tax Rates
      {
        path: 'tax-rates',
        component: TaxRatesComponent,
        data: { breadcrumb: 'الضرائب' },
        title: 'الضرائب',
      },
      {
        path: 'tax-rates/create',
        component: TaxRatesCreatePageComponent,
        title: 'إنشاء المعدل الضريبي',
        data: { breadcrumb: 'إنشاء المعدل الضريبي' },
      },
      {
        path: 'tax-rates/edit/:id',
        component: TaxRatesEditPageComponent,
        title: 'تعديل المعدل الضريبي',
        data: { breadcrumb: 'تعديل المعدل الضريبي' },
      },

      // Chart of Accounts
      {
        path: 'chart-of-accounts',
        component: ChartOfAccountsComponent,
        title: 'شجرة الحسابات',
        data: { breadcrumb: 'شجرة الحسابات' },
      },
      {
        path: 'chart-of-accounts/create',
        component: ChartOfAccountsCreatePageComponent,
        title: 'إنشاء حساب جديد',
        data: { breadcrumb: 'إنشاء حساب جديد' },
      },
      {
        path: 'chart-of-accounts/edit/:id',
        component: ChartOfAccountsEditPageComponent,
        title: 'تعديل الحساب',
        data: { breadcrumb: 'تعديل الحساب' },
      },
    ],
  },
];
