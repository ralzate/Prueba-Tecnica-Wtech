import { Component, ViewChild } from '@angular/core';
import { CompetenciasComponent } from '../components/competencias/competencias.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CompetenciasComponent, 
    CommonModule,
    ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
