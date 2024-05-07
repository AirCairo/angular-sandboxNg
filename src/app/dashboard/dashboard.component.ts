import { Component, OnInit} from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  peoples: Person[] = [];

  constructor(private personService: PersonService){}

  ngOnInit(): void{
    this.getPeoples();
  }

  getPeoples(): void {
    this.personService.getPeoples()
      .subscribe(peoples => this.peoples = peoples.slice(1, 5));
  }
}
