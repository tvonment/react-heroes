import React, { useRef, useContext } from "react";
import { HeroesContext } from "../store/heroes-context";
import Hero from "../models/hero";
import classes from "./HeroForm.module.scss";
import { Button } from "react-bootstrap";

const HeroForm: React.FC = () => {
    const heroesCtx = useContext(HeroesContext);

    const heroNameRef = useRef<HTMLInputElement>(null);
    const heroPowerRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const heroName = heroNameRef.current!.value;
        const heroPower = heroPowerRef.current!.value;

        if (heroName.trim().length === 0) { return; }

        heroesCtx.addHero(new Hero(heroName, heroPower))
    }

    return (
        <>
            <form onSubmit={submitHandler} className={classes.form}>
                <p>New Hero</p>
                <label htmlFor="name">Hero's Name</label>
                <input id="name" type="text" ref={heroNameRef} />
                <label htmlFor="power">Hero's Power</label>
                <input id="power" type="text" ref={heroPowerRef} />
                <Button variant="dark" type="submit">Add</Button>
            </form>
        </>
    )
}
export default HeroForm;