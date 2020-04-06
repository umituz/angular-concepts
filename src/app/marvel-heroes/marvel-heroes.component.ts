import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {

  inputHero = null;

  hero = 'Iron Man';

  changeHero() {
    this.hero = this.inputHero;
    this.inputHero = null;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
