import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../../services/breadcrump.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrump',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrump.component.html',
  styleUrl: './breadcrump.component.scss',
})
export class BreadcrumpComponent implements OnInit {
  breadcrumbs: any = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
