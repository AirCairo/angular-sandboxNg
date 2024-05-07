import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Person } from './person';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const peoples = [
      { id: 12, name: 'William Joseph Sanders' },
      { id: 13, name: 'Al Bradd' },
      { id: 14, name: 'Robert Ashe' },
      { id: 15, name: 'Steve Simpson' },
      { id: 16, name: 'Danny Bond' },
      { id: 17, name: 'Art Bond' },
      { id: 18, name: 'Scott Bond' },
      { id: 19, name: 'Carolyn Simpson' },
      { id: 20, name: 'Sean Miles' }
    ];
    return {peoples};
  }

  // Overrides the genId method to ensure that a person always has an id.
  // If the persons array is empty,
  // the method below returns the initial number (11).
  // if the persons array is not empty, the method below returns the highest
  // person id + 1.
  genId(peoples: Person[]): number {
    return peoples.length > 0 ? Math.max(...peoples.map(person => person.id)) + 1 : 11;
  }
}