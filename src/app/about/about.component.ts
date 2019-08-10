import { Component, OnInit } from '@angular/core';
import {DarkModeService} from '../dark-mode.service';
import {GlobalValues} from '../globalValues';
import {PROFICIENT_LANGUAGES, Skill} from './skills/skill.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {
  public assetPath: string = GlobalValues.assetPath();
  public testSkill: Skill = new Skill("Angular", 70, "/angular-logo.png", "https://angular.io/");
  public testSkillList: Skill[] = PROFICIENT_LANGUAGES;
  constructor(public darkMode: DarkModeService) {
    // this.populateTestList();
  }

  ngOnInit() {
    const options: any = {
      strings: ["Hello World! I'm Declan", "I am a Junior Computer Science Student"],
      typeSpeed: 75,
      backSpeed: 100,
      startDelay: 1500,
      backDelay: 1500,
      smartBackspace: true,
      showCursor: false,
    };
    const typed: Typed = new Typed(".title", options);
  }

  private populateTestList(): void {
    for (let i = 0; i < 10; i++) {
      this.testSkillList.push(this.testSkill);
    }
    console.log(this.testSkillList);
  }

}
