import {Component, Input, OnInit} from '@angular/core';
import {GlobalValues} from '../../globalValues';
import {DarkModeService} from "../../dark-mode.service";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.html',
  styleUrls: ['./skill.less']
})
export class SkillComponent implements OnInit {
  public assetPath: string = GlobalValues.assetPath();
  @Input() public skill: Skill;
  constructor(public darkMode: DarkModeService) {
  }

  ngOnInit() {
  }

}

export class Skill {
  constructor(
    public name: string,
    public proficiency: number, // for potential bar graph
    public iconUrl: string,
    public webUrl: string
  ) {
  }
}

export const PROFICIENT_LANGUAGES: Skill[] = [
  new Skill("TypeScript", 70, "/ts-logo.png", "https://www.typescriptlang.org/"),
  new Skill("JavaScript", 65, "/js-logo.png", "https://www.javascript.com"),
  new Skill("Scala", 65, "/scala-logo.png", "https://www.scala-lang.org/"),
  new Skill("Java", 70, "/java-logo.png", "https://www.oracle.com/java/"),
  new Skill("HTML", 60, "/html-logo.png", "https://www.w3.org/html/"),
  new Skill("CSS", 60, "/css-logo.png", "https://developer.mozilla.org/en-US/docs/Web/CSS")
  ];

export const WORKING_KNOWLEDGE_LANGUAGES: Skill[] = [
  new Skill("C", 40, "/angular-logo.png", "https://angular.io/"),
  new Skill("Python", 35, "/angular-logo.png", "https://angular.io/"),
  new Skill("LESS", 50, "/angular-logo.png", "https://angular.io/"),
];

export const PROFICIENT_TECHNOLOGIES: Skill[] = [
  new Skill("Angular", 75, "/angular-logo.png", "https://angular.io/"),
  new Skill("RXJS", 70, "/angular-logo.png", "https://angular.io/"),
  new Skill("Linux", 55, "/angular-logo.png", "https://angular.io/"),
  new Skill("Git", 60, "/angular-logo.png", "https://angular.io/"),
  new Skill("IntelliJ", 65, "/angular-logo.png", "https://angular.io/"),
];

export const WORKING_KNOWLEDGE_TECHNOLOGIES: Skill[] = [
  new Skill("NodeJS", 40, "/angular-logo.png", "https://angular.io/"),
  new Skill("Docker", 30, "/angular-logo.png", "https://angular.io/"),
  new Skill("Mercurial", 45, "/angular-logo.png", "https://angular.io/"),
];

