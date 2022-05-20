import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.scss'

const MainNavigation: React.FC = () => {
    return (
        <header className={classes.header}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Heroes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Heroes</Nav.Link>
                            <Nav.Link as={Link} to="/favourites">Favourites</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>);
}
export default MainNavigation;