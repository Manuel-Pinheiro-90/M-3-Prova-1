import { Component } from '@angular/core';
import { iAuto } from '../../modules/i-auto';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  carfiatArray: iAuto[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getAuto().then (() => {
      this.carfiatArray = this.carService.getFiat();

    })


  }





}
