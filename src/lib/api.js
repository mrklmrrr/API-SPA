const API_URL = "https://jsonplaceholder.typicode.com";

async function normalizeResponse(response) {
  const result = await response.json();

  if (response.ok) {
    return result;
  }

  throw new Error("Error while receiving data");
}

export async function _fetch(url) {
  return normalizeResponse(await fetch(API_URL + url.toString()));
}

export const getUsers = () => _fetch("/users");

export const getUser = (id) => _fetch(`/users/${id}`);

export const getAlbums = () => _fetch("/albums");

export const getUserAlbums = (userId) => _fetch(`/users/${userId}/albums`);

export const getAlbumPhotos = (albumId) => _fetch(`/albums/${albumId}/photos`);

export const getAlbum = (id) => _fetch(`/albums/${id}`);
