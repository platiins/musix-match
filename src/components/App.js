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
import NotFound from "./NotFound";

import "../assets/styles/index.scss";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouterLayout />}>
        <Route path="/" element={<ArtistsSearch />} />
        <Route path="songs/:artistId" element={<ArtistSongs />} />
        <Route path="lyrics/:trackId" element={<SongsLyrics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
