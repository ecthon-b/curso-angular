import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
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

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: IAnimal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: IAnimal) {
    console.log('Removendo animal ...')
    this.animals = this.listService.remove(this.animals, animal);
  }

}
