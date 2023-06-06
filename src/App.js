import "./styles/main.scss";
import ErrorBoundary from "components/error-boundary";
import { createHashRouter, RouterProvider } from "react-router-dom";
import MainPage from "pages/mainPage";
import ErrorPage from "pages/error-page";
import ArticlePage from "pages/articlePage";

const router = createHashRouter([
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
