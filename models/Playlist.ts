import { Cancion } from './Cancion';

export type Playlist = {
	canciones: Cancion[];
	_id: string;
	nombre: string;
	url_youtube: string;
	url_imagen: string;
	descripcion: string;
	published_at: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	id: string;
};
