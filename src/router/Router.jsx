import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "../views/Home/Home";
import Assiduite from "../views/Assiduite/Assiduite";
import Note from "../views/Note/Note";
import Assiduite_po from "../views/Assiduite/Assiduite_po";
import Setting from "../views/Setting/Setting";
import ClassList from "../views/ClassList/ClassList";
import Memo from "../views/Memo/Memo";
import Document from "../views/Document/Document";
import Container from "../components/Container/Container";
import StudentList from "../views/StudentList/StudentList";
import Note_po from "../views/Note/Note_po";

function Router() {
    return (
        <BrowserRouter>
                <Routes>
                    {/* Home page */}
                    <Route path="/" component={Home} element={<Home />} />
                    {/* Managing students' grades */}
                    <Route path={"/grades"} component={Note} element={<Note />} />
                    {/* Late arrivals and absences */}
                    <Route path={"/assiduite"} component={Assiduite} element={<Assiduite />} />
                    {/* Manage documents */}
                    <Route path={"/assiduiteprof"} component={Assiduite_po} element={<Assiduite_po/>} />
                    {/* Manage notes prof */}
                    <Route path={"/noteprof"} component={Note_po} element={<Note_po/>} />
                    {/* Manage documents */}
                    <Route path={"/document"} component={Document} element={<Document/>} />
                    {/* Managing personal notes */}
                    <Route path={"/memo"} component={Memo} element={<Memo />} />
                    {/* List of classes within the schools */}
                    <Route path={"/classes"} component={ClassList} element={<ClassList />} />
                    {/* Application settings */}
                    <Route path={"/setting"} component={Setting} element={<Setting />} />
                    {/* Application settings */}
                    <Route path="/classes/:id/students" element={<StudentList />} />
                </Routes>
        </BrowserRouter>
    );
}

export default Router;
