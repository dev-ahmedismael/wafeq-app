import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';
import {
  faCheck,
  faEdit,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-of-accounts-table',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './chart-of-accounts-table.component.html',
  styleUrl: './chart-of-accounts-table.component.scss',
})
export class ChartOfAccountsTableComponent {
  constructor(
    private router: Router,
    private spreadsheetService: SpreadsheetService
  ) {}
  @Input() data!: any;
  @Input() tableHeaders!: any;
  tableRows = 0;

  icons = {
    edit: faEdit,
    delete: faTrash,
    true: faCheck,
    false: faXmark,
  };

  edit(id: string) {
    this.router.navigateByUrl(`/chart-of-accounts/edit/${id}`);
  }

  destroy(id: string) {
    this.spreadsheetService.destroy('chart-of-accounts', id).subscribe({
      next: (res: any) => {
        let data = this.spreadsheetService.data.getValue();
        let updatedData = data.filter((item: any) => {
          return item.id !== id;
        });
        this.spreadsheetService.updateData(updatedData);
      },
    });
  }
}
