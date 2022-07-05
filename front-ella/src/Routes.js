import React from "react";
import { Route, Routes } from "react-router-dom";
import New from "./newProject/New";
import Open from "./openProject/Open";
import Home from "./home/Home";
import IDEPage from "./idePage/IDEPage";
import NotFound from "./notFound/NotFound";

export default function Links() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/open" element={<Open />} />
            <Route path="/ide" element={<IDEPage />} />
            <Route path="*" element={<NotFound />} />;
        </Routes>
    );
}