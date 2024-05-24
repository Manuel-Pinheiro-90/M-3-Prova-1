import { Component } from '@angular/core';

import { iAuto } from '../../modules/i-auto';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  caraudiArray: iAuto[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getAuto().then (() => {
      this.caraudiArray = this.carService.getAudi();

    })


  }


}
