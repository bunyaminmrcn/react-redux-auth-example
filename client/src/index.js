import React from "react";
import { createRoot } from 'react-dom/client';
import Root from './Root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from "./components/App";
import Welcome from './components/Welcome';
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Root>
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" Component={Welcome}></Route>
                    <Route path="/signup" Component={Signup}></Route>
                    <Route path="/feature" Component={Feature}></Route>
                </Routes>
            </App>
        </BrowserRouter>
    </Root>
)