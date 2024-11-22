import VibraniumClientes from "../VibraniumClientes/VibraniumClientes";
import VibraniumHero from "../VibraniumHero/VibraniumHero";
import VibraniumOQueE from "../VibraniumOQueE/VibraniumOQueE";
import VibraniumPros from "../VibraniumPros/VibraniumPros";
import VibraniumVideo from "../VibraniumVideo/VibraniumVideo";

export default function Vibranium() {
    return (
        <section>
            <VibraniumHero />
            <VibraniumOQueE />
            <VibraniumPros />
            <VibraniumVideo />
            <VibraniumClientes />
        </section>
    )
}