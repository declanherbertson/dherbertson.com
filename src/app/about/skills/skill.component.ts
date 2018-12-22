import {Component, Input, OnInit} from '@angular/core';
import {GlobalValues} from '../../globalValues';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.html',
  styleUrls: ['./skill.less']
})
export class SkillComponent implements OnInit {
  public assetPath: string = GlobalValues.assetPath();
  @Input() public skill: Skill;
  constructor() {
  }

  ngOnInit() {
  }

}

export class Skill {
  constructor(
    public name: string,
    public proficiency: string, // enum - number ?
    public iconUrl: string
  ) {
  }
}
