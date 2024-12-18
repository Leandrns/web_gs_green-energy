import { Routes, Route } from "react-router-dom";
import PageProjeto from "../PageProjeto/PageProjeto";
import Vibranium from "../Vibranium/Vibranium";
import Plataforma from "../Plataforma/Plataforma";
import GreenEnergy from "../GreenEnergy/GreenEnergy";

export default function ContentContainer() {
    return (
        <Routes>
            <Route path="/" element={<GreenEnergy />}></Route>
            <Route path="/vibranium" element={<PageProjeto />}>
                <Route path="inicio" element={<Vibranium />}></Route>
                <Route path="plataforma" element={<Plataforma />}></Route>
            </Route>
        </Routes>
    )
}