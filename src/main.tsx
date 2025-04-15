import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { App } from "./App";
import NotFound from "./pages/404";
import IndexPage from "./pages/index";
import { dark } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

export const appRoutes: Array<RouteObject> = [
    {
        index: true,
        element: (
            <Suspense>
                <IndexPage />
            </Suspense>
        ),
    },
    {
        path: "*",
        element: (
            <Suspense>
                <NotFound />
            </Suspense>
        ),
    },
];

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: appRoutes,
        errorElement: <p>Something went wrong.</p>,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={dark}>
            <GlobalStyles theme={dark} />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
