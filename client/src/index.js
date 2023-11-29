import React from "react";
import { createRoot } from 'react-dom/client';
import Root from './Root';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from "./components/App";
import Welcome from './components/Welcome';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Root>
        <React.StrictMode>
            <BrowserRouter>
                <App>
                    <Routes>
                        <Route path="/" Component={Welcome}></Route>
                    </Routes>
                </App>
            </BrowserRouter>
        </React.StrictMode>
    </Root>
)