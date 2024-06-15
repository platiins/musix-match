import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import ArtistsSearch from "./ArtistsSearch";
import ArtistSongs from "./ArtistSongs";
import RouterLayout from "./RouterLayout";
import SongsLyrics from "./SongsLyrics";

import "../styles/styles.scss";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouterLayout />}>
        <Route path="/" element={<ArtistsSearch />} />
        <Route path="songs/:artistId" element={<ArtistSongs />} />
        <Route path="lyrics/:trackId" element={<SongsLyrics />} />
        <Route path="*" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
