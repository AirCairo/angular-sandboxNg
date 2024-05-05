import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css'
})
export class PeoplesComponent {
  person: Person = {
    id: 1,
    name: 'William Sanders'
  }
}
