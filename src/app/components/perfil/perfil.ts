import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {

nom: string = 'Andrei';
cognom: string = 'Istoc';
edat: number = 67;
cicle: string = 'DAW';

get nomComplet(): string {
  return this.nom + ' ' + this.cognom;
}

get inicials(): string {
  return this.nom.charAt(0) + '.' + this.cognom.charAt(0);
}

get generacio(): string {
  if (this.edat >= 25 && this.edat <= 40) {
    return 'Milenial';
  } else if (this.edat >= 10 && this.edat <= 24) {
    return 'Gen Z';
  } else {
    return 'Altre';
  }
}
}



