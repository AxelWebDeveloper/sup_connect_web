import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutWrapper from "./views/LayoutWrapper/layoutWrapper";
import Home from "./views/Home/home";
import Assiduite from "./views/Assiduite/Assiduite";
import Note from "./views/Note/Note";
import Assiduite_po from "./views/Assiduite/Assiduite_po";
import Setting from "./views/Setting/Setting";

function Router() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Routes>
                    <Route exact path="/" component={Home} element={<Home />} />
                    <Route exact path={"/assiduite"} component={Assiduite} element={<Assiduite />} />
                    <Route exact path={"/assiduiteprof"} component={Assiduite_po} element={<Assiduite_po/>} />
                    <Route exact path={"/note"} component={Note} element={<Note />} />
                    <Route exact path={"/setting"} component={Setting} element={<Setting />} />
                </Routes>
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default Router;
