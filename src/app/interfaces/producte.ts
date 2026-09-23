//Una interficie defineix l'estructura d'un objecte
//QUALSEVOL OBJECTE de tipus Producte HA de tenir aquests camps

export interface Producte{
    id: number;
    nom: String;
    preu: number;
    disponible: boolean;
    descripcio ?: string: //el ? vol dir que es opcional
}