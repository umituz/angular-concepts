import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css']
})
export class MarvelHeroesComponent implements OnInit {

  inputHero = null;

  heroes = ['Iron Man', 'Spider Man', 'Black Panther', 'Ant Man', 'Hulk', 'Captan America'];

  adding = false;

  addHero() {
    this.heroes.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  }

  addMore() {
    this.adding = !this.adding;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
