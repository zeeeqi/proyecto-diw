import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorariosPageComponent } from './horarios-page/horarios-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HorarioComponent } from './horarios-page/horario/horario.component';
import { PasenComponent } from './pasen/pasen.component';
import { ConvalidacionesComponent } from './convalidaciones/convalidaciones.component';
import { FctComponent } from './fct/fct.component';
import { InstanciaComponent } from './instancia/instancia.component';
import { ItinerariosComponent } from './itinerarios/itinerarios.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HorariosPageComponent,
    HorarioComponent,
    PasenComponent,
    ConvalidacionesComponent,
    FctComponent,
    InstanciaComponent,
    ItinerariosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
