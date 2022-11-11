import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: "Tuca", type: "Dog" },
    { name: "Chulepa", type: "Dog" },
    { name: "Pituca", type: "Cat" },
    { name: "Kito", type: "Ave" }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
