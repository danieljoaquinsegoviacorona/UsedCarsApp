import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieveService {

url = 'http://localhost:5000/usedcars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Array<Car>> {
    return this.http.get<Array<Car>>(this.url);
  }

  deleteCar(car: Car) {

  }

  addCar(car: Car) {

  }

  editCar(car: Car, newCar: Car) {

  }
}
