import { Component } from '@angular/core';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.scss'
})
export class Page404Component {



  constructor(private carService: CarService) {}


}
