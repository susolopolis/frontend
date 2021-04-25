import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MiComponente} from './Components/Example_Component/Example_Component.component';
import { SegundoComponenteComponent } from './Components/segundo-componente/segundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    SegundoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
