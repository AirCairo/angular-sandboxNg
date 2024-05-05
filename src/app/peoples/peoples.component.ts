import { Component } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-peoples';

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css',
  

})


export class PeoplesComponent {
  // person: Person = {
  //   id: 1,
  //   name: 'William Sanders'
  // }
  persons = PERSONS;
  selectedPerson?: Person;

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}
