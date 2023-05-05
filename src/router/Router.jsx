import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../views/Home/Home";
import Assiduite from "../views/Assiduite/Assiduite";
import Note from "../views/Note/Note";
import Assiduite_po from "../views/Assiduite/Assiduite_po";
import Setting from "../views/Setting/Setting";
import Classe from "../views/Classe/Classe";
import Annonce from "../views/Annonce/Annonces";
import Memo from "../views/Memo/Memo";
import Document from "../views/Document/Document";
import Container from "../components/Container/Container";

function Router() {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    {/* Home page */}
                    <Route path="/" component={Home} element={<Home />} />
                    {/* Managing students' grades */}
                    <Route path={"/grades"} component={Note} element={<Note />} />
                    {/* Late arrivals and absences */}
                    <Route path={"/assiduite"} component={Assiduite} element={<Assiduite />} />
                    {/* Manage documents */}
                    <Route path={"/assiduiteprof"} component={Assiduite_po} element={<Assiduite_po/>} />
                    {/* Manage documents */}
                    <Route path={"/document"} component={Document} element={<Document/>} />
                    {/* Managing personal notes */}
                    <Route path={"/memo"} component={Memo} element={<Memo />} />
                    {/* Send announcements to the student or classes */}
                    <Route path={"/annonce"} component={Annonce} element={<Annonce />} />
                    {/* List of classes within the schools */}
                    <Route path={"/classes"} component={Classe} element={<Classe />} />
                    {/* Application settings */}
                    <Route path={"/setting"} component={Setting} element={<Setting />} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default Router;
