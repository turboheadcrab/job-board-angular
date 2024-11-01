import { Component } from '@angular/core';
import { ClrIconModule, ClrLayoutModule } from '@clr/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [ClrIconModule, RouterLink, RouterLinkActive, ClrLayoutModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
})
export class MainContainerComponent {}
