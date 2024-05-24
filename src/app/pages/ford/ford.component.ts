import { Component } from '@angular/core';
import { iAuto } from '../../modules/i-auto';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  carfordArray: iAuto[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getAuto().then (() => {
      this.carfordArray = this.carService.getFord();

    })


  }




}
