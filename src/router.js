import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutWrapper from "./views/LayoutWrapper/layoutWrapper";
import Home from "./views/Home/Home";
import Assiduite from "./views/Assiduite/Assiduite";
import Note from "./views/Note/Note";
import Assiduite_po from "./views/Assiduite/Assiduite_po";
import Setting from "./views/Setting/Setting";
import Classe from "./views/Classe/Classe";
import Annonce from "./views/Annonce/Annonces";
import Memo from "./views/Memo/Memo";
import Document from "./views/Document/Document";

function Router() {
    return (
        <BrowserRouter>
            <LayoutWrapper>
                <Routes>
                    <Route exact path="/" component={Home} element={<Home />} />
                    <Route exact path={"/note"} component={Note} element={<Note />} />
                    <Route exact path={"/assiduite"} component={Assiduite} element={<Assiduite />} />
                    <Route exact path={"/assiduiteprof"} component={Assiduite_po} element={<Assiduite_po/>} />
                    <Route exact path={"/document"} component={Document} element={<Document/>} />
                    <Route exact path={"/memo"} component={Memo} element={<Memo />} />
                    <Route exact path={"/annonce"} component={Annonce} element={<Annonce />} />
                    <Route exact path={"/classe"} component={Classe} element={<Classe />} />
                    <Route exact path={"/setting"} component={Setting} element={<Setting />} />
                </Routes>
            </LayoutWrapper>
        </BrowserRouter>
    );
}

export default Router;
