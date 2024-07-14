import axios from "axios";

const API_KEY = "d5f724c6f2d1d65ae12e0473d87547a5";
const BASE_URL = "https://api.musixmatch.com/ws/1.1/";
const CORS_URL = "https://cors-anywhere.herokuapp.com/";

// DATA: ARTISTS
export const searchArtists = async (artistName) => {
  const response = await axios.get(`${CORS_URL}${BASE_URL}artist.search`, {
    params: {
      apikey: API_KEY,
      q_artist: artistName,
      page_size: 5,
      s_artist_rating: "desc",
    },
  });
  return response.data.message.body.artist_list;
};

// DATA: SONGS OF THE ARTIST
export const getArtistSongs = async (artistId) => {
  const response = await axios.get(`${CORS_URL}${BASE_URL}track.search`, {
    params: {
      apikey: API_KEY,
      f_artist_id: artistId,
      page_size: 10,
      s_track_rating: "desc",
    },
  });
  return response.data.message.body.track_list;
};

// DATA: GET NAME AND ARTIST OF THE SONG
export const getTrackDetails = async (trackId) => {
  const response = await axios.get(`${CORS_URL}${BASE_URL}track.get`, {
    params: {
      apikey: API_KEY,
      track_id: trackId,
    },
  });
  return response.data.message.body.track;
};

// DATA: LYRICS OF THE SONG
export const getSongLyrics = async (trackId) => {
  const response = await axios.get(`${CORS_URL}${BASE_URL}track.lyrics.get`, {
    params: {
      apikey: API_KEY,
      track_id: trackId,
    },
  });
  return response.data.message.body.lyrics.lyrics_body;
};
