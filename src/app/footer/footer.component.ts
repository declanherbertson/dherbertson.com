import { Component, OnInit } from '@angular/core';
import {faLinkedin} from '@fortawesome/fontawesome-free-brands';
import {faGithubSquare} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  public linkdin = faLinkedin;
  public github = faGithubSquare;



  constructor() { }

  ngOnInit() {
  }

}
