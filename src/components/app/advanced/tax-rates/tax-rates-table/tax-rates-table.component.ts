import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { SpreadsheetService } from '../../../../../services/spreadsheet.service';

@Component({
  selector: 'app-tax-rates-table',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './tax-rates-table.component.html',
  styleUrl: './tax-rates-table.component.scss',
})
export class TaxRatesTableComponent {
  constructor(
    private router: Router,
    private spreadsheetService: SpreadsheetService
  ) {}
  @Input() data!: any;
  @Input() tableHeaders!: any;

  icons = {
    edit: faEdit,
    delete: faTrash,
  };

  edit(id: string) {
    this.router.navigateByUrl(`/tax-rates/edit/${id}`);
  }

  delete(id: string) {
    this.spreadsheetService.destroy('tax-rates', id).subscribe({
      next: (res) => {
        let data = this.spreadsheetService.data.getValue();
        let updatedData = data.filter((item: any) => {
          return item.id !== id;
        });
        this.spreadsheetService.updateData(updatedData);
      },
    });
  }
}
