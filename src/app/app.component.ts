import {Component} from '@angular/core';
import {DarkModeService} from './dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(public darkMode: DarkModeService) {
  }
}
