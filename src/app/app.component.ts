import {Component, OnInit} from '@angular/core';
import {DarkModeService} from './dark-mode.service';
declare const particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
// todo add loading screen, maybe opacity change, likely need load service
// todo create unified color scheme
export class AppComponent implements OnInit {
  constructor(public darkMode: DarkModeService) {
  }

  public ngOnInit(): void {
    this._initParticleBackground();
  }

  private _initParticleBackground(): void {
    particlesJS.load('background', 'assets/particleline.json');
  }
}
