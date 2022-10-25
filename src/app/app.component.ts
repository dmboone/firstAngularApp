import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [` /** can also do inline styling in the decorator instead of linking to separate css file */
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  
}
