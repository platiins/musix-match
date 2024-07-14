import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtistSongs } from "../API/musixMatch";
import Card from "react-bootstrap/Card";

import "../assets/styles/index.scss";
import Loader from "./Loader";
import { ThemeContext } from "../context/theme";

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

        if (songData.length === 0) {
          setError("No song records found.");
        }
      } catch (err) {
        setError("Too Many Requests.\nPlease try later.");
      }
      setLoading(false);
    };

    fetchSongs();
  }, [artistId]);

  const { theme } = useContext(ThemeContext);

  if (loading) return <Loader />;

  return (
    <section
      id="songs-page"
      style={{
        backgroundColor: theme === "light" ? "#f8f9fa" : "#343A40",
      }}
    >
      <div
        className="songs-header"
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        <h1 className="songs-header__title">Search Results:</h1>
        <p className="songs-header__amount">{songs.length} songs</p>
      </div>
      {error && (
        <div
          className="error-container"
          style={{
            color: theme === "light" ? "#212529" : "#F8F9FA",
            whiteSpace: "pre-wrap",
          }}
        >
          <p className="error-message">{error}</p>
          <Card.Link className="link-style" to={`/`} as={Link}>
            Back to Search
          </Card.Link>
        </div>
      )}
      <div className="all-songs-container">
        {songs.map((allSongs) => (
          <Card
            className="song-card"
            key={allSongs.track.track_id}
            style={{
              backgroundColor: theme === "light" ? "#f8f9fa" : "#343A40",
            }}
          >
            <Card.Body
              className="song-card__body"
              style={{
                color: theme === "light" ? "#212529" : "#F8F9FA",
              }}
            >
              <div className="song-card__body--name">
                <Card.Title>{allSongs.track.track_name}</Card.Title>
                <Card.Text>Album: {allSongs.track.album_name}</Card.Text>
              </div>
              <Card.Link
                className="link-styl song-card__body--link"
                to={`/lyrics/${allSongs.track.track_id}`}
                as={Link}
              >
                View Lyrics
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArtistSongs;
