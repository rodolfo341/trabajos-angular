import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	nombre = "Rodolfo";
    title = 'mi-primera-app';
	saludo = 'Saludo desde angular';
}
