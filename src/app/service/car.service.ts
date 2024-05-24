import { Injectable } from '@angular/core';
import { IGesonContent } from '../modules/i-geson-content';
import { iAuto } from '../modules/i-auto';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carArray: iAuto[] = [];

  constructor() {
    this.getAuto(); // Richiama la funzione asincrona senza `await` nel costruttore
  }

  async getAuto(): Promise<void> {
    try {
      const response = await fetch("../../assets/db.json");

      // Converto la risposta in formato JSON
      const allcar = <IGesonContent>await response.json();

      // Recupero l'array di macchine dall'oggetto JSON
      this.carArray = allcar; // Assumendo che `cars` sia la chiave dell'array nel JSON
    } catch (error) {
      console.error('Errore durante il recupero degli articoli:', error);
    }
  }

  getall(): iAuto[] {
    return this.carArray;
  }


getRandomAuto(): iAuto[] {
  const shuffled = [...this.carArray].sort(() => 0.5 - Math.random()); //clono array e lo mescolo
  return shuffled.slice(0, 2); //seleziono i primi 2 e li ritorno
}


getFiat():iAuto[]{
  return this.carArray.filter(car => car.brand === 'Fiat');
}

getFord():iAuto[]{
  return this.carArray.filter(car => car.brand === 'Ford');
}

getAudi():iAuto[]{
  return this.carArray.filter(car => car.brand === 'Audi');
}

getBrandlogo(){
  let arrayLogo =[...new Set(this.carArray.map(car=>car.brandLogo))];
  return arrayLogo;
}




}
