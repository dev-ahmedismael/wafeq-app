import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEnvelope,
  faLayerGroup,
  faFolderOpen,
  faSackDollar,
  faHandHoldingDollar,
  faAddressCard,
  faMoneyCheckDollar,
  faBarcode,
  faCircleDollarToSlot,
  faBriefcase,
  faCodeBranch,
  faBuildingColumns,
  faDraftingCompass,
  faStar,
  faCode,
  faCodeCompare,
  faFile,
  faFolderTree,
  faHandshakeAngle,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  icons = {
    arrow: faAngleLeft,
  };
  sidebarItems = [
    { id: 1, icon: faEnvelope, title: 'البريد الوارد', route: '/inbox' },
    { id: 2, icon: faLayerGroup, title: 'لوحة التحكم', route: '/dashboard' },
    { id: 3, icon: faFolderOpen, title: 'التقارير', route: '/reports' },
    {
      id: 4,
      icon: faSackDollar,
      title: 'المبيعات',
      items: [
        {
          id: 4.1,
          title: 'عروض أسعار وفواتير مبدئية',
          route: '/quotes-and-proformas',
        },
        { id: 4.2, title: 'فواتير بيع', route: '/invoices' },
        { id: 4.3, title: 'سندات العملاء', route: '/customer-payments' },
        { id: 4.4, title: 'فواتير مجدولة', route: '/scheduled-invoices' },
        { id: 4.5, title: 'إشعارات دائنة', route: '/credit-notes' },
        { id: 4.6, title: 'فواتير نقدية', route: '/cash-invoices' },
        { id: 4.7, title: 'إشعارات تسليم', route: '/delivery-notes' },
        { id: 4.8, title: 'فواتير بيع من ال API', route: '/api-invoices' },
      ],
    },
    {
      id: 5,
      icon: faHandHoldingDollar,
      title: 'المشتريات',
      items: [
        { id: 5.1, title: 'فواتير المشتريات', route: '/bills' },
        { id: 5.2, title: 'سندات الموردين', route: '/supplier-payments' },
        { id: 5.3, title: 'مصروفات نقدية', route: '/cash-expenses' },
        { id: 5.4, title: 'إشعارات مدينة', route: '/debit-notes' },
        { id: 5.5, title: 'أوامر الشراء', route: '/purchase-orders' },
      ],
    },
    {
      id: 6,
      icon: faAddressCard,
      title: 'العملاء والموردين',
      items: [
        { id: 6.1, title: 'جهات الإتصال', route: '/contacts' },
        { id: 6.2, title: 'المستفيدين', route: '/beneficiaries' },
      ],
    },
    {
      id: 7,
      icon: faMoneyCheckDollar,
      title: 'الرواتب والموظفين',
      items: [
        { id: 7.1, title: 'الرواتب', route: '/payroll' },
        { id: 7.2, title: 'مسير الرواتب', route: '/pay-runs' },
        { id: 7.3, title: 'دفع الرواتب', route: '/employee-payments' },
        { id: 7.4, title: 'الموظفين', route: '/employees' },
        { id: 7.5, title: 'مطالبات الموظفين', route: '/employees-calims' },
        { id: 7.6, title: 'مطالباتي', route: '/my-expense-claims' },
      ],
    },
    {
      id: 8,
      icon: faBarcode,
      title: 'منتجات، خدمات، مخزون',
      items: [
        {
          id: 8.1,
          title: 'المنتجات والخدمات',
          route: '/products-and-services',
        },
        { id: 8.2, title: 'تعديلات المخزون', route: '/inventory-adjustments' },
        { id: 8.3, title: 'المستودعات', route: '/warehouses' },
      ],
    },
    {
      id: 9,
      icon: faCircleDollarToSlot,
      title: 'مراكز التكلفة',
      route: '/cost-centers',
    },
    { id: 10, icon: faBriefcase, title: 'المشاريع', route: '/projects' },
    { id: 11, icon: faCodeBranch, title: 'الفروع', route: '/branches' },
    {
      id: 12,
      icon: faBuildingColumns,
      title: 'الحسابات البنكية',
      route: '/bank-accounts',
    },
    {
      id: 13,
      icon: faDraftingCompass,
      title: 'الأصول الثابتة',
      route: '/fixed-assets',
    },
    {
      id: 14,
      icon: faStar,
      title: 'متقدم',
      items: [
        { id: 14.1, title: 'الضرائب', route: '/tax-rates' },
        {
          id: 14.2,
          title: 'الدفاتر اليومية اليدوية',
          route: '/manual-journals',
        },
        { id: 14.3, title: 'جدول الحسابات', route: '/chart-of-accounts' },
      ],
    },
    {
      id: 15,
      icon: faCode,
      title: 'المطورين',
      items: [{ id: 15.1, title: 'API Keys', route: '/api-keys' }],
    },
    { id: 16, icon: faCodeCompare, title: 'التكاملات', route: '/integrations' },
    {
      id: 17,
      icon: faFile,
      title: 'نماذج الوثائق',
      route: '/document-templates',
    },
    {
      id: 18,
      icon: faFolderTree,
      title: 'أداة نقل البيانات',
      route: '/migration-assistant',
    },
    {
      id: 19,
      icon: faHandshakeAngle,
      title: 'مركز المساعدة',
      route: '/help-center',
    },
  ];

  activeItem = 0;

  setActiveItem(id: number) {
    this.activeItem == id ? (this.activeItem = 0) : (this.activeItem = id);
  }
}
