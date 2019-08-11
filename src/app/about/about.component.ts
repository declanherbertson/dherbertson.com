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
    const options1: any = {
      strings: [
              "Hello World!^500 I'm Declan",
              "I am junior Computer Science student at UBC",
              "I enjoy tinkering and learning new things",
              "I look forward to talking with you more!"
            ],
            typeSpeed: 50,
            loop: false,
            startDelay: 1200,
            backSpeed: 25,
            backDelay: 1200,
            showCursor: false,
            contentType: 'html',
    };
    const options: any = {
      strings: ["Hello World! I'm Declan", "I am a Junior Computer Science Student"],
      typeSpeed: 90,
      backSpeed: 70,
      startDelay: 1500,
      backDelay: 1500,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    };
    const typed: Typed = new Typed(".title", options1);
  }

  private populateTestList(): void {
    for (let i = 0; i < 10; i++) {
      this.testSkillList.push(this.testSkill);
    }
    console.log(this.testSkillList);
  }

}
