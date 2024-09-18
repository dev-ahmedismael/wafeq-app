import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTrashCan,
  faTurnDown,
  faTurnUp,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  @Input() position = { x: 0, y: 0 };
  @Output() actionEvent = new EventEmitter<string>();

  icons = {
    up: faTurnUp,
    down: faTurnDown,
    delete: faTrashCan,
  };
  isVisible = false;

  show(x: number, y: number): void {
    this.isVisible = true;
    this.position = {
      x: x,
      y: y,
    };
  }
  hide(): void {
    this.isVisible = false;
  }
  sendAction(action: string): void {
    this.actionEvent.emit(action);
  }
}
