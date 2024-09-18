import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TableConfig, TableOptions } from '../../interfaces/table-config';
import { SpreadsheetService } from '../../services/spreadsheet.service';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import {
  FormConfig,
  FormOptions,
  InputConfig,
} from '../../interfaces/form-config';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-table',
  standalone: true,
  imports: [
    CommonModule,
    DynamicFormComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss',
})
export class DynamicTableComponent implements OnInit {
  constructor(
    private spreadsheetService: SpreadsheetService,
    private fb: FormBuilder
  ) {}

  icons = {
    sort: faSort,
    filter: faFilter,
    search: faSearch,
  };

  @Input() tableConfig!: TableConfig;
  @Input() tableOptions!: TableOptions;
  res: any = [];

  // Search
  searchForm = this.fb.group({
    query: ['', Validators.required],
  });

  search() {
    if (this.searchForm.valid) {
      this.spreadsheetService
        .search(this.searchForm.value, this.tableOptions.path)
        .subscribe({
          next: (res: any) => {
            this.res = res;
          },
        });
    }
  }

  // Sort
  sortMenuActive: boolean = false;

  toggleSortMenu() {
    this.sortMenuActive = !this.sortMenuActive;
  }

  sort(sort_by: string, sort_direction: string) {
    let data = {
      sort_by: sort_by,
      sort_direction: sort_direction,
    };
    this.spreadsheetService
      .sortOrFilter(data, this.tableOptions.path)
      .subscribe({
        next: (res: any) => {
          this.res = res;
        },
      });
  }

  // Filter

  filterMenuActive: boolean = false;

  toggleFilterMenu() {
    this.filterMenuActive = !this.filterMenuActive;
  }
  filters!: any[];

  filterFromOptions: FormOptions = {
    submit: 'تصفية',
    submitClasses: 'blue-btn',
    inputClasses: 'ring-1 ring-slate-200 rounded focus:outline-sky-600 ',
    cols: 2,
  };

  generateFilters() {
    let filters: any[] = [];
    for (const col of this.tableConfig) {
      switch (col.type) {
        case 'text':
          let filter: InputConfig = {
            label: col.header,
            name: col.key,
            type: 'text',
            placeholder: '',
            value: '',
            validations: [],
            errorMessages: { '': '' },
          };
          filters.push(filter);
          break;

        case 'number':
          let filterMin: InputConfig = {
            label: `أقل ${col.header}`,
            name: col.key,
            type: 'text',
            placeholder: '',
            value: '',
            validations: [],
            errorMessages: { '': '' },
          };
          filters.push(filterMin);

          let filterMax: InputConfig = {
            label: `أكبر ${col.header}`,
            name: col.key,
            type: 'text',
            placeholder: '',
            value: '',
            validations: [],
            errorMessages: { '': '' },
          };
          filters.push(filterMax);
          break;

        case 'date':
          let filterFrom: InputConfig = {
            label: `من ${col.header}`,
            name: 'start',
            type: 'date',
            placeholder: '',
            value: '',
            validations: [],
            errorMessages: { '': '' },
          };
          filters.push(filterFrom);

          let filterTo: InputConfig = {
            label: `إلى ${col.header}`,
            name: 'end',
            type: 'date',
            placeholder: '',
            value: '',
            validations: [],
            errorMessages: { '': '' },
          };
          filters.push(filterTo);
          break;

        default:
          filter = {
            label: col.header,
            name: col.header,
            type: 'text',
            placeholder: '',
            value: '',
            validations: [],
            errorMessages: { '': '' },
          };
          filters.push(filter);
          break;
      }
      this.filters = filters;
    }
  }

  onFilter(event: any) {
    console.log(event);
  }

  // Pagination
  pages: number[] = [];

  changePage(page: number) {
    this.spreadsheetService
      .index(`${this.tableOptions.path}?page=${page}`)
      .subscribe({
        next: (res: any) => {
          this.res = res;
        },
      });
  }

  goToPage(event: any) {
    let page = event.target.value;
    this.spreadsheetService
      .index(`${this.tableOptions.path}?page=${page}`)
      .subscribe({
        next: (res: any) => {
          this.res = res;
        },
      });
  }

  ngOnInit(): void {
    // Fetch data
    this.spreadsheetService.index(this.tableOptions.path).subscribe({
      next: (res: any) => {
        this.res = res;
        let pages: number[] = [];
        for (let index = 1; index <= res.last_page; index++) {
          pages.push(index);
        }
        this.pages = pages;
      },
    });

    // Generate Filters
    this.generateFilters();
  }
}
