import { ListadoService } from './services/listado.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ContadorComponent } from './components/contador/contador.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { appRouting } from './app.routing';
import { TipoSubjectsComponent } from './components/tipo-subjects/tipo-subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ContadorComponent,
    NavbarComponent,
    TipoSubjectsComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    ListadoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
