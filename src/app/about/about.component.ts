import { Component, OnInit } from '@angular/core';
import {DarkModeService} from '../dark-mode.service';
import {GlobalValues} from '../globalValues';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  public assetPath: string = GlobalValues.assetPath();
  constructor(public darkMode: DarkModeService) {
  }

  ngOnInit() {
  }

}
