import { Injectable } from '@angular/core';
import { IAnimal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(animals: IAnimal[], animal: IAnimal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<IAnimal[]> {
    return this.http.get<IAnimal[]>(this.apiUrl)
  }

}
