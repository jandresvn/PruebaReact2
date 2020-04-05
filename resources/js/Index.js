import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/App";
import AppRoutes from "./routes"

if (document.getElementById('index')) {
    render(<Router><AppRoutes /></Router>, document.getElementById('index'));
}
