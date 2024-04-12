import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentRoute = this.router.url.replace(/^\/+/g, '');
    });
  }
  sidebarVisible: boolean = false;

  sidebarOpen(){
    const html = document.getElementsByTagName('html')[0] as HTMLElement;
    html.classList.add('sidebar-open');
    this.sidebarVisible = true;
  }

  sidebarClose(){
    const html = document.getElementsByTagName('html')[0] as HTMLElement;
    this.sidebarVisible = false;
    html.classList.remove('sidebar-open');
  }

  sidebarToggle(){
    if(this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

}
