import Homepage from "./components/homepage";
import ServicesPage from "./components/services";
import "./styles/main.scss";
import ErrorBoundary from "components/error-boundary";
import Article from "components/article";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "pages/mainPage";
import ErrorPage from "components/error-page";
import FixedHeader from "components/homepage/Header";
import HamburgerButton from "components/homepage/HamburgerButton";
import ArticlePage from "pages/articlePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/article/:id",
        element: <ArticlePage />,
        errorElement: <ErrorPage />,
    },
]);

function App() {
    return (
        <ErrorBoundary>
            <div className="page-wrapper">
                <RouterProvider router={router} />
            </div>
        </ErrorBoundary>
    );
}

export default App;
