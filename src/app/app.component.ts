import {Component, OnInit} from '@angular/core';
import {DarkModeService} from './dark-mode.service';
declare const particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(public darkMode: DarkModeService) {
  }

  public ngOnInit(): void {
    this._initParticleBackground();
  }

  private _initParticleBackground(): void {
    console.log(particlesJS.load);
    particlesJS.load('background', 'assets/particleline.json');
  }
}
