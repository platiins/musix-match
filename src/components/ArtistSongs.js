import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtistSongs } from "../API/musixMatch";

const ArtistSongs = () => {
  const { artistId } = useParams();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      setError(null);
      try {
        const songData = await getArtistSongs(artistId);
        setSongs(songData);
      } catch (err) {
        setError("Failed to fetch songs");
      }
      setLoading(false);
    };

    fetchSongs();
  }, [artistId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Artist Songs</h1>
      <div className="song-list">
        {songs.map((songObj) => (
          <div key={songObj.track.track_id} className="song-card">
            <h2>{songObj.track.track_name}</h2>
            <p>Album: {songObj.track.album_name}</p>
            <p>Artist: {songObj.track.artist_name}</p>
            <Link to={`/lyrics/${songObj.track.track_id}`}>
              <button>View Lyrics</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistSongs;