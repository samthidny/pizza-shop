import { Component } from '@angular/core';
import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(mock: MockService) {

  }

  title = 'pizza-shop';
}
