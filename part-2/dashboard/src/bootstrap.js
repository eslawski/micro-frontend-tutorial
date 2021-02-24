import { createApp } from "vue";
import Dashboard from "./components/Dashboard";

// Dashboard doesn't have any of the fancy navigation stuff our other apps had
const mount = (element) => {
    const app = createApp(Dashboard);
    app.mount(element); // This mount function is Vue NOT our other mount function.
};

// Situation 1 (see comment in part-1/products)
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_dashboard-dev-root");
    if (devRoot) {
        mount(devRoot, {});
    }
}


// Situation 2 (see comment in part-1/products)
export { mount };
