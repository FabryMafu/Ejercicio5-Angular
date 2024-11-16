import { Component, Input } from '@angular/core';
import { Persona } from '../../persona';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() persona: Persona = {
    nombre: "",
    edad: 0
  }
}
