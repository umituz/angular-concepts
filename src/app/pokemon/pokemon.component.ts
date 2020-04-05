import {Component, OnInit} from '@angular/core';
import {List} from './list';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  list = List;

  type = null;

  GetType(item) {
    this.type = item.type;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
