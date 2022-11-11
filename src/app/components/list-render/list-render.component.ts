import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: IAnimal[] = [
    { name: "Tuca", type: "Dog", age: 2 },
    { name: "Chulepa", type: "Dog", age: 3 },
    { name: "Pituca", type: "Cat", age: 1 },
    { name: "Kito", type: "Ave", age: 1 }
  ]

  animalDetails = ''

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: IAnimal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

}
