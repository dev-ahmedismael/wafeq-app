import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SpreadsheetService } from '../../services/spreadsheet.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private spreadsheetService: SpreadsheetService
  ) {}
  @Input() path!: string;

  searchIcon = faSearch;

  form = this.fb.group({
    search: ['', Validators.required],
  });

  submit() {
    this.spreadsheetService.search(this.form.value, this.path).subscribe({
      next: (res: any) => {
        this.spreadsheetService.updateData(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
