import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  show: boolean = false;
  labelbtn: string = 'Mostrar';

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.show = !this.show; //toggle

    if (this.show == true) {
      this.labelbtn = 'Esconder'
    } else {
      this.labelbtn = 'Mostrar'

    }
  }

}
