import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { SpreadsheetService } from '../../services/spreadsheet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.scss',
})
export class SortComponent {
  constructor(private spreadsheetService: SpreadsheetService) {}

  @Input() sortItems!: any;
  sortIcon = faSort;

  sort(col: string, direction: string) {
    let data = {
      col,
      direction,
    };
    this.spreadsheetService.sort(data, 'tax-rates').subscribe({
      next: (res: any) => {
        this.spreadsheetService.updateData(res);
      },
    });
  }

  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
