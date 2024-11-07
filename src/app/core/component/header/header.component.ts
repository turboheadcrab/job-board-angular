import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ClrIconModule, ClrNavigationModule } from '@clr/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClrIconModule, RouterLink, RouterLinkActive, ClrNavigationModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
