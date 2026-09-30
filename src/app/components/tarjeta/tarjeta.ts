/*Aquest fitxer contñe la lògica: propietats, mètodes, getLocaleExtraDayPeriods...*/

import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';
@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu : number = 1299;
  estoc : number = 5;

  producte: Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 1290,
    disponible: true,
    descripcio: 'Informatica'
  };





/*
INTERPOLACIO DE DADES
Permet conectar les dades del TS a l'HTML
Permet incrustar expresisons TS dins de l'HTML, angular avalua l'expressio i mostra el resultat com a text.

{{nomPropietat}} --> mostra el valor d'una propietat de la classe
{{2 + 3}} --> mostra 5
{{text.toUpperCase{}}} --> mostra el text en majuscules
{{edat >= 18 ? 'Major d\'edat' : 'Menor d\'edat'}} --> operador termari

amb {{nom}} --> el valor por canviar i l'HTML s'actualitzara automaticament. Hardcoded es x sempre es estatic
*/

//Getter1: preu amv iva del 21%
get preuAmbIva(): number {
  return this.producte.preu * 1.21;
}

get estatDsiponibilitat(): string {
  if (this.producte.disponible == true) {
    return 'Disponible';
  }
    return 'Esgotat';
  
}


}

