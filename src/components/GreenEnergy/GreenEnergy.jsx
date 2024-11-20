import { Duplas } from "../Dualiadade/seisDuplas";
import { HeroEnergy } from "../Hero_Energy/hero_section";
import Pratica from "../Pratica/Pratica";
import { TiposEnergeticos } from "../TiposdeEnergia/Energias";

export default function GreenEnergy() {
    return (
        <>
            <HeroEnergy/>
            <TiposEnergeticos/>
            <Duplas />
            <Pratica />
        </>
    )
}