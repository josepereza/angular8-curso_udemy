import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {VideojuegoComponent} from './videojuego/videojuego.component';
import {ZapatillasComponent} from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormComponent } from './form/form.component';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    ContactoComponent,
    FormComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
