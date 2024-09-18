import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { MainMenuComponent } from '../context-menu/main-menu/main-menu.component';
import { DragData } from '../../interfaces/drag-data';
import { SpreadsheetService } from '../../services/spreadsheet.service';
@Component({
  selector: 'app-spreadsheet',
  standalone: true,
  imports: [CommonModule, MainMenuComponent],
  templateUrl: './spreadsheet.component.html',
  styleUrl: './spreadsheet.component.scss',
})
export class SpreadsheetComponent {
  constructor(public spreadsheetService: SpreadsheetService) {}
  @Input() tableHeaders: string[] = [];
  @Input() data: any[] = [];
  @ViewChild(MainMenuComponent)
  mainMenu!: MainMenuComponent;
  @HostListener('document:click')
  onDocumentClick() {
    this.mainMenu.hide();
  }

  updateData(): void {
    const value = this.dragData.value;
    const startIndex = this.dragData.firstRowIndex;
    const lastIndex = this.dragData.lastRowIndex;
    const col = this.dragData.col;

    for (let index = startIndex; index <= lastIndex; index++) {
      let row: any = this.data[index];
      if (col) {
        row[col] = value;
      }
    }
  }

  // Handle active and selected cell
  selectedCol: string | null = null;
  selectedRow: string | null = null;
  activeCol: string | null = null;
  activeRow: string | null = null;

  updateSelectedCell(selectedCol: string, selectedRow: string) {
    this.clearDragData();
    if (this.activeCol !== selectedCol || this.activeRow !== selectedRow) {
      this.clearActiveCell();
    }
    this.selectedCol = selectedCol;
    this.selectedRow = selectedRow;
  }
  updateActiveCell(activeCol: string, activeRow: string) {
    if (this.selectedCol !== activeCol || this.selectedRow !== activeRow) {
      this.clearSelectedCell();
    }
    this.activeCol = activeCol;
    this.activeRow = activeRow;
  }
  clearSelectedCell() {
    this.selectedCol = null;
    this.selectedRow = null;
  }
  clearActiveCell() {
    this.activeCol = null;
    this.activeRow = null;
  }

  // Handle dragging
  isDragging: boolean = false;
  dragData: DragData = {
    value: null,
    col: null,
    firstRowIndex: -1,
    lastRowIndex: -1,
  };

  onDragStart(event: DragEvent, value: string, col: string, rowIndex: number) {
    document.body.classList.add('no-select');
    event.dataTransfer!.setDragImage(new Image(), 0, 0);
    this.isDragging = true;
    this.dragData = {
      value: value,
      col: col,
      firstRowIndex: rowIndex,
      lastRowIndex: -1,
    };
  }

  onDragEnd(event: MouseEvent) {
    document.body.classList.remove('no-select');
    this.isDragging = false;
    this.clearSelectedCell();
    this.updateData();
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  onDragEnter(event: DragEvent) {
    event.preventDefault();
  }

  updateDragLastIndex(index: number) {
    if (this.isDragging === true) {
      this.dragData.lastRowIndex = index;
    }
  }

  clearDragData() {
    this.dragData = {
      value: null,
      col: null,
      firstRowIndex: -1,
      lastRowIndex: -1,
    };
  }

  // Context Menu
  // Main Menu
  showMainMenu(event: MouseEvent, col: string, row: string) {
    event.preventDefault();
    this.updateSelectedCell(col, row);
    this.mainMenu.show(event.clientX, event.clientY);
  }

  makeMenuAction(action: string) {}

  sendData(event: any) {
    console.log(event.target.value);
  }
}
