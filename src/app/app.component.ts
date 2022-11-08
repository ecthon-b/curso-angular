import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Borhis - do component app';
  userData = {
    email: 'borhis@email.com',
    role: 'Admin'
  }

  title = 'curso-angular';
}
