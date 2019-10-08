import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsedCarsComponent } from './used-cars/used-cars.component';



@NgModule({
  declarations: [UsedCarsComponent],
  imports: [
    CommonModule
  ],
  exports: [UsedCarsComponent]
})
export class CarListingModule { }
