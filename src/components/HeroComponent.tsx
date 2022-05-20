import Hero from "../models/hero";
import classes from "./HeroComponent.module.scss";


const HeroComponent: React.FC<{ hero: Hero; onDeleteHero: () => void }> = (props) => {
    return (<li className={classes.hero} key={props.hero.id} onClick={props.onDeleteHero}>{props.hero.name} - {props.hero.power}</li>);
}
export default HeroComponent;