import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenciasComponent } from './components/competencias/competencias.component';

const routes: Routes = [
  { path: 'actividad1', component: CompetenciasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }