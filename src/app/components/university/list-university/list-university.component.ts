import { Component, inject } from '@angular/core';
import { HttpService } from '../../../http.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-university',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-university.component.html',
  styleUrl: './list-university.component.scss'
})
export class ListUniversityComponent {
    httpService=inject(HttpService);
    university: any[] = [];
    ngOnInit(){
        this.httpService.getUniversity().subscribe(result=>{
          this.university = result;
        })
    }
}
