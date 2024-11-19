import VibraniumClientes from "../VibraniumClientes/VibraniumClientes";
import VibraniumHero from "../VibraniumHero/VibraniumHero";
import VibraniumOQueE from "../VibraniumOQueE/VibraniumOQueE";
import VibraniumPros from "../VibraniumPros/VibraniumPros";

export default function Vibranium() {
    return (
        <section>
            <VibraniumHero />
            <VibraniumOQueE />
            <VibraniumPros />
            <VibraniumClientes />
        </section>
    )
}