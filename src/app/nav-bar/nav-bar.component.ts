import {Component} from '@angular/core';
import {DarkModeService} from '../dark-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  constructor(public darkMode: DarkModeService) {
  }

}
