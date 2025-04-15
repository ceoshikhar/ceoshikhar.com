import { Fragment } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const App = () => {
    return (
        <Fragment>
            <Outlet />
            <ScrollRestoration />
        </Fragment>
    );
};
