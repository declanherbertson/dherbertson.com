import {Component} from '@angular/core';
import {DarkModeService} from '../dark-mode.service';
import {GlobalValues, Sections} from '../globalValues';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {
  public sections: any = Sections;
  public hiddenSections: string[] = GlobalValues.hiddenNavSections();

  constructor(public darkMode: DarkModeService) {
  }

}
