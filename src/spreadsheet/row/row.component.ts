import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from '../spreadsheet/spreadsheet.component';
import { CommonModule } from '@angular/common';
import { SpreadsheetService } from '../../services/spreadsheet.service';
import { MainMenuComponent } from '../context-menu/main-menu/main-menu.component';

@Component({
  selector: '[app-row]',
  standalone: true,
  imports: [CommonModule, MainMenuComponent],
  templateUrl: './row.component.html',
  styleUrl: './row.component.scss',
})
export class RowComponent {
  constructor(protected spreadsheetService: SpreadsheetService) {}
  @ViewChild(MainMenuComponent)
  mainMenu!: MainMenuComponent;
  @HostListener('document:click')
  onDocumentClick() {
    this.mainMenu.hide();
  }
  @Input() row: any = -1;
  @Input() index: number = -1;
}
