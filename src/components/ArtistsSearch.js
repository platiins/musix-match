import React, { useState } from "react";
import { searchArtists } from "../API/musixMatch.js";
import { Link } from "react-router-dom";

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
        setError("No matching results");
      }
    } catch (err) {
      setError("Failed to fetch artists");
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Search Artists</h1>
      <input
        type="text"
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
        placeholder="Enter artist name"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>
      {error && <p>{error}</p>}
      <div className="artist-list">
        {artists.map((artistObj) => (
          <div key={artistObj.artist.artist_id} className="artist-card">
            <h2>{artistObj.artist.artist_name}</h2>
            <Link to={`/songs/${artistObj.artist.artist_id}`}>View Songs</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsSearch;
