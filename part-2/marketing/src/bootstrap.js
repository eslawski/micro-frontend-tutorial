import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { createMemoryHistory } from "history";

const mount = (element, { onNavigate }) => {
    const history = createMemoryHistory();

    // History will automatically call onNavigate when it notices a change to the history we are using here in MarketingApp
    history.listen(onNavigate);

    ReactDOM.render(
        <App history={history} />,
        element
    )
}

// Situation 1 (see comment in part-1/products)
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_marketing-dev-root");
    if (devRoot) {
        mount(devRoot);
    }
}


// Situation 2 (see comment in part-1/products)
export { mount };
