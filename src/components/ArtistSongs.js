import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtistSongs } from "../API/musixMatch";
import Card from "react-bootstrap/Card";

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
      <h1>Artists Songs</h1>
      <p>Found {songs.length} songs</p>
      <div>
        {songs.map((songObj) => (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{songObj.track.track_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Artist: {songObj.track.artist_name}
              </Card.Subtitle>
              <Card.Text>Album: {songObj.track.album_name}</Card.Text>
              <Card.Link to={`/lyrics/${songObj.track.track_id}`} as={Link}>
                View Lyrics
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArtistSongs;
