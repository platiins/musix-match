import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongLyrics } from "../API/musixMatch.js";

const SongLyrics = () => {
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
        setError("Failed to fetch lyrics");
      }
      setLoading(false);
    };

    fetchLyrics();
  }, [trackId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Song Lyrics</h1>
      <pre>{lyrics}</pre>
    </div>
  );
};

export default SongLyrics;
