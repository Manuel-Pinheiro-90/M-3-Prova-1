import { Injectable } from '@angular/core';
import { IGesonContent } from '../modules/i-geson-content';
import { iAuto } from '../modules/i-auto';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  carArray: iAuto[] = [];

  constructor() {
    this.getAuto();
  }

  async getAuto(): Promise<void> {
    try {
      const response = await fetch("../../assets/db.json");

      // Converto la risposta in formato JSON
      const allcar = <IGesonContent>await response.json();

      // Recupero l'array di macchine dall'oggetto JSON
      this.carArray = allcar;
    } catch (error) {
      console.error('Errore durante il recupero degli articoli:', error);
    }
  }

  getall(): iAuto[] { //funzione di test ora inutile
    return this.carArray;
  }



getRandomAuto(): iAuto[] {
  const shuffled = [...this.carArray].sort(() => 0.5 - Math.random()); //clono array e lo mescolo
  return shuffled.slice(0, 2); //seleziono i primi 2 e li ritorno
}

// funzione per filtrare le macchine per marca
getFiat():iAuto[]{
  return this.carArray.filter(car => car.brand === 'Fiat');
}
// funzione per filtrare le macchine per marca
getFord():iAuto[]{
  return this.carArray.filter(car => car.brand === 'Ford');
}
// funzione per filtrare le macchine per marca
getAudi():iAuto[]{
  return this.carArray.filter(car => car.brand === 'Audi');
}
//funzione di recupero di tutti i brand per mettere logo in home (potevo farlo a mano  ma vabhe...)
getBrandlogo(){
  let arrayLogo =[...new Set(this.carArray.map(car=>car.brandLogo))];
  return arrayLogo;
}




}
