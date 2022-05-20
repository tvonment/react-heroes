import { Button, Card } from "react-bootstrap";
import Hero from "../models/hero";
import classes from "./HeroComponent.module.scss";


const HeroComponent: React.FC<{ hero: Hero; onDeleteHero: () => void }> = (props) => {
    return (
        <Card className={classes.hero} key={props.hero.id}>
            <Card.Body>
                <Card.Title>{props.hero.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.hero.power}</Card.Subtitle>
                <Button onClick={props.onDeleteHero} variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}
export default HeroComponent;