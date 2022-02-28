import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ConvalidacionesComponent } from './convalidaciones/convalidaciones.component';
import { FctComponent } from './fct/fct.component';
import { HorariosPageComponent } from './horarios-page/horarios-page.component';
import { InstanciaComponent } from './instancia/instancia.component';
import { ItinerariosComponent } from './itinerarios/itinerarios.component';
import { PasenComponent } from './pasen/pasen.component';

const routes: Routes = [
  { path: 'horario/:nombre/:curso/:turno', component: HorariosPageComponent },
  { path: 'pasen', component: PasenComponent },
  { path: 'convalidaciones', component: ConvalidacionesComponent },
  { path: 'fct', component: FctComponent },
  { path: 'instancia', component: InstanciaComponent },
  { path: 'itinerarios', component: ItinerariosComponent },
  { path: 'contacto' , component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
