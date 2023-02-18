import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutWrapper from "./views/LayoutWrapper/layoutWrapper";
import Home from "./views/Home/home";

function Router() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Routes>
                    <Route exact path="/" component={Home} element={<Home />} />
                </Routes>
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default Router;
