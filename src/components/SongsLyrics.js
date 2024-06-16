import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongLyrics, getTrackDetails } from "../API/musixMatch.js";
import Loader from "./Loader.js";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SongsLyrics = () => {
  const { trackId } = useParams();
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [artistName, setArtistName] = useState("");
  const [trackName, setTrackName] = useState("");

  useEffect(() => {
    const fetchLyrics = async () => {
      setLoading(true);
      setError(null);
      try {
        const trackDetails = await getTrackDetails(trackId);
        setArtistName(trackDetails.artist_name);
        setTrackName(trackDetails.track_name);

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
    <section id="lyrics-page">
      <h1 className="lyrics-title">
        {artistName} | {trackName}
      </h1>
      {error && <p className="error-message">{error}</p>}
      <pre className="lyrics-text">{lyrics}</pre>
      <div className="share-container">
        <p className="share-title">Share:</p>

        <a className="sm-link" href="https://www.instagram.com/">
          <button type="button" className="sm-link__btn">
            <FaInstagram />
          </button>
        </a>
        <a className="sm-link" href="https://www.pinterest.com/">
          <button type="button" className="sm-link__btn">
            <FaPinterestP />
          </button>
        </a>
        <a className="sm-link" href="https://x.com/">
          <button type="button" className="sm-link__btn">
            <FaXTwitter />
          </button>
        </a>
      </div>
    </section>
  );
};

export default SongsLyrics;
