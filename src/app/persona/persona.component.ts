import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

    nombre: string = "Rodolfo";
    apellido: string = "Aravena";
    private edad: number = 50;

    getEdad (): number {
        return this.edad;
    }

}
