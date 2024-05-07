
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-peoples';
import { PersonDetailComponent } from '../person-detail/person-detail.component';
import { PersonService } from './../person.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrl: './peoples.component.css',
})


export class PeoplesComponent implements OnInit {

  selectedPerson?: Person;

  peoples: Person[] = [];

  constructor(private personService: PersonService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.messageService.add(`PeoplesComponent: Selected person id=${person.id}`);
  }

  getPeoples(): void {
    this.personService.getPeoples()
        .subscribe(peoples => this.peoples = peoples);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personService.addPerson({ name } as Person)
      .subscribe(person => {
        this.peoples.push(person);
      });
  }

  delete(person: Person): void {
    this.peoples = this.peoples.filter(h => h !== person);
    this.personService.deletePerson(person.id).subscribe();
  }
}
