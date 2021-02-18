import faker from 'faker';

const mount = (element) => {
    let products = "";

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    element.innerHTML = products;
    //ReactDOM.render(<App />, element) - works well with this too!
};

// Situation 1
// We are running this file in development in isolation
// We are using our local index.html
// and we not DEFINITELY has an element with id of dev-products
if (process.env.NODE_ENV === "development") {
    // Put something unique in dev index.html, like "dev-products", and check for it
    // If we find it, we can assume we are in standalone development mode
    const devElement = document.querySelector("#dev-products");
    if (devElement) {
        mount(devElement);
    }
}

// Situation 2
// We are running this file in development or production through the CONTAINER
// No GUARANTEE that an element with an id of dev-products.
// WE DO NOT WANT to try to render this immediately.
// The fix: Export the `mount` function to be used in host app
export { mount };

