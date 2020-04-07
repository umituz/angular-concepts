import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({

  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule
  ],

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule
  ]

})

export class MaterialModule {
}
