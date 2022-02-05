import React, { useRef, useContext } from "react";
import { HeroesContext } from "../store/heroes-context";
import Hero from "../models/hero";
import classes from "./HeroForm.module.scss";
import { Button } from "react-bootstrap";

const HeroForm: React.FC = () => {
    const heroesCtx = useContext(HeroesContext);

    const heroNameRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const heroName = heroNameRef.current!.value;

        if (heroName.trim().length === 0) {
            return;
        }

        heroesCtx.addHero(new Hero(heroName))
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="name">New Hero</label>
            <input id="name" type="text" ref={heroNameRef} />
            <Button variant="dark" type="submit">Add</Button>
        </form>
    )
}
export default HeroForm;