import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {DarkModeService} from "../../dark-mode.service";

@Component({
  selector: 'app-nav-bar-option',
  templateUrl: './nav-bar-option.component.html',
  styleUrls: ['./nav-bar-option.component.less']
})
export class NavBarOptionComponent {

  @Input() public path: string;
  @Input() public content: string;

  constructor(private _router: Router, public darkMode: DarkModeService) {
  }

  public active(url: string): boolean {
    return this._router.url === url;
  }

}
