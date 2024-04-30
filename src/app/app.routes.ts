import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompetenciasComponent } from './components/competencias/competencias.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'actividad1', component: CompetenciasComponent },
];
