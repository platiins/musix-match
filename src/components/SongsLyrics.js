import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSongLyrics, getTrackDetails } from "../API/musixMatch.js";
import Loader from "./Loader.js";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ThemeContext } from "../context/theme.js";

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
        setError("Too Many Requests. Please try later.");
      }
      setLoading(false);
    };

    fetchLyrics();
  }, [trackId]);

  const { theme } = useContext(ThemeContext);

  if (loading) return <Loader />;

  return (
    <section
      id="lyrics-page"
      style={{
        backgroundColor: theme === "light" ? "#f8f9fa" : "#343A40",
      }}
    >
      <h1
        className="lyrics-title"
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        {artistName} | {trackName}
      </h1>
      {error && (
        <p
          className="error-message"
          style={{
            color: theme === "light" ? "#212529" : "#F8F9FA",
          }}
        >
          {error}
        </p>
      )}
      <pre
        className="lyrics-text"
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        {lyrics}
      </pre>
      <div
        className="share-container"
        style={{
          color: theme === "light" ? "#212529" : "#F8F9FA",
        }}
      >
        <p className="share-title">Share:</p>

        <a className="sm-link" href="https://www.instagram.com/">
          <button
            type="button"
            className="sm-link__btn"
            style={{
              color: theme === "light" ? "#212529" : "#F8F9FA",
            }}
          >
            <FaInstagram />
          </button>
        </a>
        <a className="sm-link" href="https://www.pinterest.com/">
          <button
            type="button"
            className="sm-link__btn"
            style={{
              color: theme === "light" ? "#212529" : "#F8F9FA",
            }}
          >
            <FaPinterestP />
          </button>
        </a>
        <a className="sm-link" href="https://x.com/">
          <button
            type="button"
            className="sm-link__btn"
            style={{
              color: theme === "light" ? "#212529" : "#F8F9FA",
            }}
          >
            <FaXTwitter />
          </button>
        </a>
      </div>
    </section>
  );
};

export default SongsLyrics;
