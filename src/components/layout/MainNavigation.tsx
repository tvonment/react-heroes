import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
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
                            <Nav.Link><Link to="/">Heroes</Link></Nav.Link>
                            <Nav.Link><Link to="/favourites">Favourites</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>);
}
export default MainNavigation;