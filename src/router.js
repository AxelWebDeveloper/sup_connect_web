import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutWrapper from "./layoutWrapper";
import Home from "./home";

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
