import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpreadsheetService } from '../../../../services/spreadsheet.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cost-centers-table',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './cost-centers-table.component.html',
  styleUrl: './cost-centers-table.component.scss',
})
export class CostCentersTableComponent {
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
    this.router.navigateByUrl(`/cost-centers/edit/${id}`);
  }

  delete(id: string) {
    this.spreadsheetService.destroy('cost-centers', id).subscribe({
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
