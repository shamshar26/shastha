import { Component } from '@angular/core';
import { TextLimitPipe } from '../../../text-limit.pipe';

@Component({
  selector: 'app-dash3',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './dash3.component.html',
  styleUrl: './dash3.component.scss'
})
export class Dash3Component {
  data = [
    {
      videoTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      views:'1000',
      likes:'20',
      comments:'150',
      imageSrc:"pro.jpg"
    },
    {
      videoTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      views:'2000',
      likes:'50',
      comments:'1500',
      imageSrc:"pro.jpg"
    },
    {
      videoTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      views:'5400',
      likes:'20',
      comments:'1860',
      imageSrc:"pro.jpg"
    },
  
   
  ];
}
