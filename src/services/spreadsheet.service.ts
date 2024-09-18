import { Injectable } from '@angular/core';
import { DragData } from '../interfaces/drag-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpreadsheetService {
  constructor(private http: HttpClient) {}

  baseURL = environment.baseURL;

  headers = new HttpHeaders({
    'X-Tenant': '4f802872-4bbc-4b0d-994f-9473f6f52011',
  });

  data = new BehaviorSubject<any>(0);

  currentData = this.data.asObservable();

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
    this.updateDataOnDrag();
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

  makeMenuAction(action: string) {}

  sendData(event: any) {
    console.log(event.target.value);
  }

  updateDataOnDrag(): void {
    const value = this.dragData.value;
    const startIndex = this.dragData.firstRowIndex;
    const lastIndex = this.dragData.lastRowIndex;
    const col = this.dragData.col;

    let data = this.data.getValue();
    for (let index = startIndex; index <= lastIndex; index++) {
      let row: any = data[index];
      if (col) {
        row[col] = value;
      }
    }
    this.data.next(data);
  }

  updateData(data: any) {
    this.data.next(data);
  }

  // API Methods
  index(path: string | undefined) {
    return this.http.get(`${this.baseURL}/${path}`, { headers: this.headers });
  }

  show(path: string, id: string) {
    return this.http.get(`${this.baseURL}/${path}/${id}`, {
      headers: this.headers,
    });
  }

  store(data: any, path: string) {
    return this.http.post(`${this.baseURL}/${path}`, data, {
      headers: this.headers,
    });
  }

  update(data: any, path: string, id: string) {
    return this.http.put(`${this.baseURL}/${path}/${id}`, data, {
      headers: this.headers,
    });
  }

  destroy(path: string, id: string) {
    return this.http.delete(`${this.baseURL}/${path}/${id}`, {
      headers: this.headers,
    });
  }

  search(data: any, path: string | undefined) {
    return this.http.post(`${this.baseURL}/${path}/search`, data, {
      headers: this.headers,
    });
  }

  sort(data: any, path: string) {
    return this.http.post(`${this.baseURL}/${path}/sort`, data, {
      headers: this.headers,
    });
  }

  filter(data: any, path: string) {
    return this.http.post(`${this.baseURL}/${path}/filter`, data, {
      headers: this.headers,
    });
  }

  sortOrFilter(data: any, path: string | undefined) {
    return this.http.post(`${this.baseURL}/${path}/sort-filter`, data, {
      headers: this.headers,
    });
  }
}
