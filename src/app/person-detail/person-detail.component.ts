import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  //standalone: true,
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrl: './person-detail.component.css',
  //imports: [FormsModule, NgIf, UpperCasePipe],
})
export class PersonDetailComponent implements OnInit {
  person: Person | undefined;
  //@Input() person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.personService.getPerson(id).subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.person) {
      this.personService.updatePerson(this.person)
        .subscribe(() => this.goBack());
    }
  }
}
