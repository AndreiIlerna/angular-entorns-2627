import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte}  from './interfaces/producte';
import { Producte as ProducteClass} from './producte';
import { music } from './models/music';
import { Tarjeta } from './components/tarjeta/tarjeta';
import { Perfil } from './components/perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

//OBJECTIU DE LA SESSIO 2: Veure la diferencie entre JS i TS


  
//TIPUS BASICS
nom: string = 'Angular';
nom2: string = 'Angular';
versio: number = 20;
actiu: boolean = true;


//ARRAYS TIPATS
colors: string[] = ['vermell', 'verd', 'blau'];
frameworks: string[] = [this.nom, this.nom2];
punts: number[] = [10, 15, 20];

//TypeScripts infereix el tipus automaticament
ciutat = 'Lleida'; //string
codiP = 25123; //number




producte1: Producte = {
    id: 1,
    nom: 'Producte 1',
    preu: 10,
    disponible: true,
    descripcio: 'Descripció del producte 1'
}


producte2: Producte = {
    id: 2,
    nom: 'Producte 2',
    preu: 15,
    disponible: true,
    descripcio: 'Descripció del producte 2'
}

productes: Producte[] = [this.producte1, this.producte2];


//CLASES PRODUCTES
p1 = new ProducteClass('Teclat', 89.99);


p2 = new ProducteClass('Ratoli', 199.99);



  //3. creeu un nou producte i mostreu el descompte per consola
  //4. cerqueu la manera de mostrar el descompte amb un popup


/*/constructor() {
  console.log(this.p1.toString());
  console.log(this.p1.preuAmbIva());
  console.log(this.p2.descompte()); 
  //alert('Preu amb descuento: ' + this.p2.descompte());

}
/*/


canco1: music = {
  id: 1,
  nom: 'Espera',
  artista:'8belial',
  album: true,
  bpm: 80
}

canco2: music = {
  id: 2,
  nom: 'Dome',
  artista:'Yung Thug',
  album: true,
  bpm: 113
}

canco3: music = {
  id: 3,
  nom: 'Naarayanaa',
  artista:'Dr. Peacock',
  album: false,
  bpm: 200
}

canco4: music = {
  id: 4,
  nom: 'DELICHEESE',
  artista:'yyy891',
  album: true,
  bpm: 140
}

canco5: music = {
  id: 5,
  nom: 'Piña colada',
  artista:'roomtrash6',
  album: true,
}


musica: music[] = [this.canco1, this.canco2, this.canco3, this.canco4, this.canco5];

get actius(): music[] {
  return this.musica.filter(canco => canco.album);
}

findById(id: number): music | undefined {
  return this.musica.find(canco => canco.id === id);
}

formatarElement(element: music): string {
  return `${element.nom} - ${element.artista} (${element.bpm ?? 'BPM desconegut'})`;
}


//constructor() {
 //console.log(this.canco1.getActius());
//}

}
