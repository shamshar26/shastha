import { Component } from '@angular/core';
import { TextLimitPipe } from '../../../text-limit.pipe';

@Component({
  selector: 'app-dash6',
  standalone: true,
  imports: [TextLimitPipe],
  templateUrl: './dash6.component.html',
  styleUrl: './dash6.component.scss'
})
export class Dash6Component {
  data = [
    {
      profileImageSrc: 'pro-icon.jpeg',
      username: 'test.username',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      thumbnailSrc: 'dp.jpg'
    },
    {
      profileImageSrc: 'pro-icon.jpeg',
      username: 'test.username',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      thumbnailSrc: 'dp.jpg'
    },
    {
      profileImageSrc: 'pro-icon.jpeg',
      username: 'test.username',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      thumbnailSrc: 'dp.jpg'
    },
    {
      profileImageSrc: 'pro-icon.jpeg',
      username: 'test.username',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      thumbnailSrc: 'dp.jpg'
    },
  
  ]
}
