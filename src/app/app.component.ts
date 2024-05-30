import { Component } from '@angular/core';
// Components
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
// Routes
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
