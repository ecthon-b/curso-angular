import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: IAnimal[] = []

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  ngOnInit(): void {
  }

  showAge(animal: IAnimal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  removeAnimal(animal: IAnimal) {
    console.log('Removendo animal ...')
    this.animals = this.listService.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
