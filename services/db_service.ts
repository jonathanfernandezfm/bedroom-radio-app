import { Artista } from '@models/Artista';
import { Cancion } from '@models/Cancion';
import { Playlist } from '@models/Playlist';
import * as artista from 'bedroom_db/artistas.json';
import * as canciones from 'bedroom_db/canciones.json';
import * as playlists from 'bedroom_db/playlists.json';

type CancionPropertyType = typeof canciones;
type ArtistaPropertyType = typeof artista;
type PlaylistPropertyType = typeof playlists;

export function getCancion(id: string): Cancion {
	return canciones[id as keyof CancionPropertyType] as Cancion;
}

export function getArtista(id: string): Artista {
	return artista[id as keyof ArtistaPropertyType] as Artista;
}

export function getPlaylist(id: string): Playlist {
	return playlists[id as keyof PlaylistPropertyType] as Playlist;
}

export function getPlaylists(): PlaylistPropertyType {
	return playlists as PlaylistPropertyType;
}
