import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterIcon = faFilter;
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
