import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private _darkMode: boolean = false;
  public readonly name: string = "Declan Herbertson";

  public toggleDarkMode(): void {
    this._darkMode = !this._darkMode;
  }

  public get darkMode(): boolean {
    return this._darkMode;
  }
}
