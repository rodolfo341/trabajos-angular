import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

    deshabilitar = false;
    mensaje = "no se ha agregado ninguna persona";

    agregarPersona(){
        this.mensaje = "Persona agregada";
    }

    constructor() { }

    ngOnInit(): void {
    }

}

