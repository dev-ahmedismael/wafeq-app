import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigate-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navigate-button.component.html',
  styleUrl: './navigate-button.component.scss',
})
export class NavigateButtonComponent {
  @Input() route!: string;
  @Input() text!: string;
}
