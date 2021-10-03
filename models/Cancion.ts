import { Artista } from './Artista';

export type Cancion = {
	estreno: boolean;
	artistas: Artista[];
	generos: [];
	_id: string;
	id_youtube: string;
	url_youtube: string;
	url_spotify: string;
	published_at: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	nombre: string;
	id: string;
};
