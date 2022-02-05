import React, { useContext } from "react";
import HeroComponent from "./HeroComponent";
import { HeroesContext } from "../store/heroes-context";
import classes from "./HeroesComponent.module.scss";

const HeroesComponent: React.FC = () => {
    const heroesCtx = useContext(HeroesContext)

    return (
        <ul className={classes.heroes}>
            {heroesCtx.heroes.map((hero) => (
                <HeroComponent hero={hero} onDeleteHero={heroesCtx.deleteHero.bind(null, hero)} />
            ))}
        </ul>
    );
};
export default HeroesComponent;