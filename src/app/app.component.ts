import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./components/hijo/hijo.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio5';
  personas = [
    {
      nombre: "Mario",
      edad: 23
    },
    {
      nombre: "Juan",
      edad: 31
    }
  ];
}
