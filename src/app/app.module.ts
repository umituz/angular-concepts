import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {PokemonComponent} from './pokemon/pokemon.component';
import {FormsModule} from '@angular/forms';
import {MarvelHeroesComponent} from './marvel-heroes/marvel-heroes.component';
import {DcComicsComponent} from './dc-comics/dc-comics.component';

const routeLists: Routes = [
  {path: '', component: DcComicsComponent},
  {path: 'marvels', component: MarvelHeroesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    MarvelHeroesComponent,
    DcComicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
