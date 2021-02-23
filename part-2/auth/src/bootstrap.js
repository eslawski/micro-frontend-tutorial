import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (element, { onNavigate, devHistory }) => {
    const history = devHistory || createMemoryHistory();

    if (onNavigate) {
        // History will automatically call onNavigate when it notices a change to the history we are using here in MarketingApp
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} />,
        element
    );

    return {
        onParentNavigate({ pathname: nextPathname}) {
            const { pathname } = history.location;

            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }

};

// Situation 1 (see comment in part-1/products)
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_auth-dev-root");
    if (devRoot) {
        mount(devRoot, {
            devHistory: createBrowserHistory()
        });
    }
}


// Situation 2 (see comment in part-1/products)
export { mount };
