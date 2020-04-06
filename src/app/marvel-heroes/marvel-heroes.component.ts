import {Component, OnInit} from '@angular/core';
import {MarvelHeroesService} from './marvel-heroes-service';

@Component({
  selector: 'app-marvel-heroes',
  templateUrl: './marvel-heroes.component.html',
  styleUrls: ['./marvel-heroes.component.css'],
  providers: [MarvelHeroesService]
})
export class MarvelHeroesComponent implements OnInit {

  heroes: string[];

  inputHero = null;

  adding = false;

  addHero() {
    this.heroes.push(this.inputHero);
    this.inputHero = null;
    this.adding = false;
  }

  addMore() {
    this.adding = !this.adding;
  }

  constructor(private ajax: MarvelHeroesService) {
    this.heroes = this.ajax.heroes;
  }

  ngOnInit(): void {
  }

}
