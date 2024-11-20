import { Routes, Route } from "react-router-dom";
import Vibranium from "../Vibranium/Vibranium";
import Plataforma from "../Plataforma/Plataforma";
import NavProjeto from "../NavProjeto/NavProjeto";

export default function PageProjeto() {
    return (
        <>
            <NavProjeto />
            <Routes>
                <Route path="inicio" element={<Vibranium />}></Route>
                <Route path="plataforma" element={<Plataforma />}></Route>
            </Routes> 
        </>
    )
}