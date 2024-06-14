import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import ArtistsSearch from "./ArtistsSearch";
import ArtistSongs from "./ArtistSongs";
import SongLyrics from "./SongLyrics";
import RouterLayout from "./RouterLayout";

import "../styles/styles.scss";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouterLayout />}>
        <Route path="/" element={<ArtistsSearch />} />
        <Route path="songs/:artistId" element={<ArtistSongs />} />
        <Route path="lyrics/:trackId" element={<SongLyrics />} />
        <Route path="*" />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
