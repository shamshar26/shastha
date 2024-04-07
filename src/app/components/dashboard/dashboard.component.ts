import { Component } from '@angular/core';

import { Dash1Component } from './dash1/dash1.component';
import { Dash2Component } from './dash2/dash2.component';
import { Dash3Component } from './dash3/dash3.component';
import { Dash4Component } from './dash4/dash4.component';
import { Dash5Component } from './dash5/dash5.component';
import { Dash6Component } from './dash6/dash6.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Dash1Component,Dash2Component,Dash3Component,Dash4Component,Dash6Component,Dash5Component],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
