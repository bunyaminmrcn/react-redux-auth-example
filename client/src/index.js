import React from "react";
import { createRoot } from 'react-dom/client';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';

import App from "./components/App";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Root>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Root>
)