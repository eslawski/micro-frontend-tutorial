import React from "react";
import { Switch, Route, Router} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
//noop
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName = createGenerateClassName({
    productionPrefix: "au"
});

export default ({ history, onAuthChange }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onAuthChange} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignIn={onAuthChange} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    </div>;
}
