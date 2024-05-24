

import { Component } from '@angular/core';
import { CarService } from '../../service/car.service';
import { iAuto } from '../../modules/i-auto';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carArray:iAuto []=[];
  randomCar:iAuto[] = [];
  arrayLogo:string[]=[];
constructor(private carService: CarService) {}





ngOnInit(){this.carService.getAuto().then(()=>{
  this.arrayLogo= this.carService.getBrandlogo();
  this.randomCar = this.carService.getRandomAuto()

})}







}

