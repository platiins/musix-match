import React, { useState } from "react";
import { searchArtists } from "../API/musixMatch.js";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";

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
        setError("No matching results. Please check your request.");
      }
    } catch (err) {
      setError("Failed to fetch artists");
    }
    setLoading(false);
  };

  if (loading)
    return (
      <div>
        <Bars
          height="50"
          width="50"
          color="#000000"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
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
        {artists.map((allArtists) => (
          <div key={allArtists.artist.artist_id} className="artist-card">
            <h2>{allArtists.artist.artist_name}</h2>
            <Link to={`/songs/${allArtists.artist.artist_id}`}>View Songs</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsSearch;
