import { Component } from '@angular/core';
import { CostCentersTableComponent } from '../cost-centers-table/cost-centers-table.component';
import { SearchComponent } from '../../../../spreadsheet/search/search.component';
import { SortComponent } from '../../../../spreadsheet/sort/sort.component';
import { NavigateButtonComponent } from '../../../../spreadsheet/navigate-button/navigate-button.component';
import { DynamicTableComponent } from '../../../../shared/dynamic-table/dynamic-table.component';
import { TableConfig, TableOptions } from '../../../../interfaces/table-config';

@Component({
  selector: 'app-cost-centers',
  standalone: true,
  imports: [
    CostCentersTableComponent,
    SearchComponent,
    SortComponent,
    NavigateButtonComponent,
    DynamicTableComponent,
  ],
  templateUrl: './cost-centers.component.html',
  styleUrl: './cost-centers.component.scss',
})
export class CostCentersComponent {
  tableConfig: TableConfig = [
    { header: 'الاسم', key: 'name', type: 'text' },
    { header: 'تاريخ الإنشاء', key: 'created_at', type: 'date' },
    { header: 'تاريخ التعديل', key: 'updated_at', type: 'date' },
  ];

  tableOptions: TableOptions = {
    path: 'cost-centers',
    sortable: true,
    filterable: true,
    creatable: true,
  };
}
