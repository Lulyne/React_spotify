import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../screens/ErrorPage";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Library from "../screens/Library";
import Playlist from "../screens/Playlist";
import Wishlist from "../screens/Wishlist";
import Detail from "../screens/Detail";
import ArtistDetail from "../components/ArtistDetail";

const Router = createBrowserRouter([
    {
        element: (
            <>
                {/* on appelle l'element qu'on affichera sur toutes les vues */}
                <App />
            </>
        ),
        // on appelle la vue ErrorPage en cas de route inconnue
        errorElement: <ErrorPage />,
        //ici on déclare les routes
        children: [
            {
                path: "/",
                element: <Home/>,
                errorElement: <ErrorPage />
            },
            {
                path: "/search",
                element: <Search/>,
            },
            {
                path: "/library",
                element: <Library/>,
            },
            {
                path: "/add-playlist",
                element: <Playlist/>,
            },
            {
                path: "/wishlist",
                element: <Wishlist/>,
            },
            {
                path: "/detail",
                element: <Detail/>,
            },
            {
                path: "/artist-detail",
                element: <ArtistDetail/>,
            },
        ]
    }
])

export default Router;