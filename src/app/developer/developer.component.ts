import { Component, OnInit } from '@angular/core';
import { Developer } from '../common/developer.model';
import { Skill } from '../common/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  public developer: Developer | undefined;
  constructor() {}

  ngOnInit(): void {
    this.developer = new Developer(
      'Hakaishin',
      'Beerus',
      28,
      'The Wildest Male on Universe 7',
      'Hakai the web Developement',
      [
        new Skill(
          'Hakai Attack',
          'https://45secondes.fr/wp-content/uploads/2021/03/1616345767_Dragon-Ball-Super-Dou-Hakai-tire-t-il-son-pouvoir.jpg',
          'https://dragonball.fandom.com/fr/wiki/Haka%C3%AF/'
        ),
        new Skill(
          'Ultra Instinct',
          'https://pm1.narvii.com/6782/23ef5af810736d207df1ac1fb7f3ce215a8bed02v2_hq.jpg',
          'https://dragonballuniverse.fandom.com/wiki/Ultra_Instinct'
        ),
      ]
    );
  }
}