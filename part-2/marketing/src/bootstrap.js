import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

const mount = (element) => {
    ReactDOM.render(
        <App/>,
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
