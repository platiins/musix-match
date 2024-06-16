import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongLyrics } from "../API/musixMatch.js";
import Loader from "./Loader.js";

const SongsLyrics = () => {
  const { trackId } = useParams();
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      setLoading(true);
      setError(null);
      try {
        const lyricsData = await getSongLyrics(trackId);
        setLyrics(lyricsData);
      } catch (err) {
        setError("Network issue. Please check the connection.");
      }
      setLoading(false);
    };

    fetchLyrics();
  }, [trackId]);

  if (loading) return <Loader />;

  return (
    <div id="lyrics-page">
      <h1 className="lyrics-title">Song Lyrics</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="lyrics-text">{lyrics}</div>
    </div>
  );
};

export default SongsLyrics;
