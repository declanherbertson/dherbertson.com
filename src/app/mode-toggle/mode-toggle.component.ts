import { Component, OnInit } from '@angular/core';
import {DarkModeService} from '../dark-mode.service';

// todo add swipe gesture and make it larger on mobile
@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.less']
})
export class ModeToggleComponent implements OnInit {

  constructor(public darkMode: DarkModeService) { }

  ngOnInit() {
  }

}
