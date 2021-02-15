import faker from "faker";

const mount = (element) => {
    element.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`;
}

if (process.env.NODE_ENV === "development") {
    const devElement = document.querySelector("#dev-cart");
    if (devElement) {
        mount(devElement);
    }
}

export { mount };
