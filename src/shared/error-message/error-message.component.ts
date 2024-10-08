import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss',
})
export class ErrorMessageComponent {
  @Input() message: string | null = null;

  closeIcon = faXmark;

  closeErrorMessage(): void {
    this.message = null;
  }
}
