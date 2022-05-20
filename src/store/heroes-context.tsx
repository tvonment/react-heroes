import React, { useCallback, useEffect, useState } from "react";
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

    const fetchHeroes = useCallback(async () => {
        try {
            let response = await fetch("https://heroes-tvonment.azurewebsites.net/api/heroes")
            let data = await response.json()
            setHeroes(data)
        } catch (error) {
            console.log(error)
        }

    }, []);

    useEffect(() => {
        fetchHeroes();
    }, [fetchHeroes])

    const addHeroHandler = useCallback(async (newHero) => {
        try {
            let response = await fetch("https://heroes-tvonment.azurewebsites.net/api/hero", {
                method: "POST",
                body: JSON.stringify(newHero)
            })
            if (response.ok) {
                let data = await response.json()
                setHeroes((prevHeroes) => prevHeroes.concat(data));
            } else {
                throw new Error("Add Hero did not work")
            }
        } catch (error) {
            console.log(error)
        }
    }, []);

    const deleteHeroHandler = useCallback(async (fallenHero: Hero) => {
        try {
            let response = await fetch("https://heroes-tvonment.azurewebsites.net/api/hero/" + fallenHero.id, {
                method: "DELETE"
            })
            if (response.ok) {
                setHeroes((prevHeroes) => {
                    return prevHeroes.filter(hero => hero.id !== fallenHero.id);
                })
            } else {
                throw new Error("Delete did not work")
            }
        } catch (error) {
            console.log(error)
        }
    }, []);

    const contextValue: HeroesContextObj = {
        heroes: heroes,
        addHero: addHeroHandler,
        deleteHero: deleteHeroHandler
    }
    return <HeroesContext.Provider value={contextValue}>{props.children}</HeroesContext.Provider>
}
export default HeroesContextProvider;
