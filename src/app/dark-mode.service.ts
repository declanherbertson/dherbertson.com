import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor(){}
  private _darkMode: boolean = true;

  public get darkModeEnabled(): boolean {
    return this._darkMode;
  }

  public toggleMode(): void {
    this._darkMode = !this._darkMode;
  }
}

