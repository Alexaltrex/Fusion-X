import {Provider} from "react-redux";
import * as React from "react";
import {store} from "../../store/store";
import {App} from "./App";
import {HashRouter} from "react-router-dom";

export const AppContainer = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    )
}