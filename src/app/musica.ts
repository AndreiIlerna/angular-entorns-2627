export class musica{
    id: number;
    nom: string;
    artista: string;
    album: boolean;
    bpm ?: number;


    constructor (id: number, nom: string, artista: string, album: boolean, bpm ?: number,) {
        this.id = id;
        this.nom = nom;
        this.artista = artista;
        this.album = album;
        this.bpm = bpm;
    }


    getActius(): boolean {
        return this.album;
    }

    findById(id: number) {
        
    }
}