import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car';
import { DataRetrieveService } from '../../../services/data-retrieve.service';


@Component({
  selector: 'app-used-cars',
  templateUrl: './used-cars.component.html',
  styleUrls: ['./used-cars.component.css']
})
export class UsedCarsComponent implements OnInit {
  carList: Array<Car> = new Array<Car>();
  showUpdate: boolean;
  showInsert: boolean;
  constructor(
    dataService: DataRetrieveService
  ) {
    this.showUpdate = false;
    this.showInsert = false;
  }

  ngOnInit() {
    this.carList.push(
      new Car(1, 'Civic', 'white', 2002, 'Honda', 170000, 70000)
    );
  }
  showInsertForm() {
    console.log('showing insert');
    this.showInsert = true;
  }
  showUpdateForm(id) {
    this.showUpdate = true;
  }
  deleteCar(id) {
    console.log(id);
  }
}
