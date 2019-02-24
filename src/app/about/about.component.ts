import { Component, OnInit } from '@angular/core';
import {DarkModeService} from '../dark-mode.service';
import {GlobalValues} from '../globalValues';
import {PROFICIENT_LANGUAGES, Skill} from './skills/skill.component';

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
  }

  private populateTestList(): void {
    for (let i = 0; i < 10; i++) {
      this.testSkillList.push(this.testSkill);
    }
    console.log(this.testSkillList);
  }

}
