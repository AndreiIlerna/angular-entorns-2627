import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte }  from './interfaces/producte';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');








  
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

}

}


