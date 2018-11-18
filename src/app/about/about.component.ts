import { Component, OnInit } from '@angular/core';
import {DarkModeService} from '../dark-mode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor(public darkMode: DarkModeService) {
  }

  ngOnInit() {
  }

}
