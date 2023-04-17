import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutWrapper from "./views/LayoutWrapper/layoutWrapper";
import Home from "./views/Home/home";
import Assiduite from "./views/Assiduite/Assiduite";
import Note from "./views/Note/Note";

function Router() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Routes>
                    <Route exact path="/" component={Home} element={<Home />} />
                    <Route exact path={"/assiduite"} component={Assiduite} element={<Assiduite />} />
                    <Route exact path={"/note"} component={Note} element={<Note />} />
                </Routes>
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default Router;
