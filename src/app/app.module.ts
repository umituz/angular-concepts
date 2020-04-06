import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {FormsModule} from '@angular/forms';
import { MarvelHeroesComponent } from './marvel-heroes/marvel-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    MarvelHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
