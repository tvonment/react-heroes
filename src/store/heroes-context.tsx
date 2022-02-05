import React, { useState } from "react";
import Hero from "../models/hero";

type HeroesContextObj = {
    heroes: Hero[];
    addHero: (hero: Hero) => void;
    deleteHero: (hero: Hero) => void;
}

export const HeroesContext = React.createContext<HeroesContextObj>({
    heroes: [],
    addHero: (hero: Hero) => { },
    deleteHero: (hero: Hero) => { }
});

const HeroesContextProvider: React.FC = (props) => {
    useState();

    const [heroes, setHeroes] = useState<Hero[]>([]);

    const addHeroHandler = (newHero: Hero) => {
        setHeroes((prevHeroes) => prevHeroes.concat(newHero));
    }

    const deleteHeroHandler = (fallenHero: Hero) => {
        setHeroes((prevHeroes) => {
            return prevHeroes.filter(hero => hero.id !== fallenHero.id);
        })
    }

    const contextValue: HeroesContextObj = {
        heroes: heroes,
        addHero: addHeroHandler,
        deleteHero: deleteHeroHandler
    }

    return <HeroesContext.Provider value={contextValue}>{props.children}</HeroesContext.Provider>
}
export default HeroesContextProvider;
