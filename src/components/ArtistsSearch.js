import React, { useState } from "react";
import { searchArtists } from "../API/musixMatch.js";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";

import Loader from "./Loader.js";

import "../assets/styles/index.scss";

const ArtistsSearch = () => {
  const [artistName, setArtistName] = useState("");
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const artistData = await searchArtists(artistName);
      setArtists(artistData);

      if (artistData.length === 0) {
        setError("No matching results. Please double-check your request.");
      }
    } catch (err) {
      setError("Network issue. Please check the connection.");
    }
    setLoading(false);
  };

  if (loading) return <Loader />;

  return (
    <section id="search-page">
      <section className="artist-search">
        <h1 className="artist-search__title">Search Artists:</h1>
        <InputGroup className="artist-search__input-box">
          <Form.Control
            required
            type="text"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            placeholder="e.g. Prodigy"
            className="search-input"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleSearch}
            disabled={loading}
            className="search-btn"
          >
            <FiSearch />
          </Button>
        </InputGroup>
      </section>
      {error && <p className="error-message">{error}</p>}

      <div className="artists-list">
        {artists.map((allArtists) => (
          <Card
            key={allArtists.artist.artist_id}
            className="artists-list__card"
          >
            <Card.Body className="artists-list__card--content">
              <Card.Title className="card-title">
                {allArtists.artist.artist_name}
              </Card.Title>
              <Link to={`/songs/${allArtists.artist.artist_id}`}>
                View Songs
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ArtistsSearch;
