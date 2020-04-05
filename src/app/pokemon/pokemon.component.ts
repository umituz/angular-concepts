import {Component, OnInit} from '@angular/core';
import {List} from './list';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  list = List;

  constructor() {
  }

  ngOnInit(): void {
  }

}
