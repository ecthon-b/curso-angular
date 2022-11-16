import { Injectable } from '@angular/core';
import { IAnimal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: IAnimal[], animal: IAnimal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}
