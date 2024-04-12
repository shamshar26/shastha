import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentRoute = this.router.url.replace(/^\/+/g, '');
    });
  }
}
