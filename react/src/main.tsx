import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppProvider from "./lib/AppProvider";
import { config } from "./lib/config";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
        .render(
            <React.StrictMode>
                <AppProvider>
                    <BrowserRouter basename={config.basePath}>
                        <App/>
                    </BrowserRouter>
                </AppProvider>
            </React.StrictMode>
        );