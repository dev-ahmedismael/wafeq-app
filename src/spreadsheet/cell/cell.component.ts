import { Component, Input } from '@angular/core';
import { SpreadsheetService } from '../../services/spreadsheet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-cell]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
})
export class CellComponent {
  constructor(protected spreadsheetService: SpreadsheetService) {}

  @Input() row!: any;
  @Input() col!: string;
  @Input() index!: number;
  @Input() value!: any;
}
