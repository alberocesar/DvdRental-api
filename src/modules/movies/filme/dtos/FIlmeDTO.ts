export default class FilmeDTO {
    filmId: number;
    title: string;
    description: string;
    releaseYear: number;
    languageId: number;
    rentalDuration: number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: string;
    lastUpdate: Date;
    specialFeatures: string;
    fulltext: string;
}

export type CreateFilmeDTO = Omit<FilmeDTO, 'filmId'>;         // Omit pega todos os atributos menos o film_id
export type UpdateFilmeDTO = Partial<FilmeDTO>;                 // Partial pega todos os atributos e torna opcionais