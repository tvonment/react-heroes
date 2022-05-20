import React, { useContext } from "react";
import HeroComponent from "./HeroComponent";
import { HeroesContext } from "../store/heroes-context";
import classes from "./HeroesComponent.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const HeroesComponent: React.FC = () => {
    const heroesCtx = useContext(HeroesContext)

    return (
        <Container className={classes.heroes}>
            <Row>
                {heroesCtx.heroes.map((hero) => (
                    <Col sm={3}>
                        <HeroComponent key={hero.id} hero={hero} onDeleteHero={heroesCtx.deleteHero.bind(null, hero)} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default HeroesComponent;