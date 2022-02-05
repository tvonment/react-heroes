import HeroesComponent from "../components/HeroesComponent";
import HeroForm from "../components/HeroForm";
import HeroesContextProvider from "../store/heroes-context";

const AllHeroesPage: React.FC = () => {
    return (
        <HeroesContextProvider>
            <HeroForm />
            <HeroesComponent />
        </HeroesContextProvider>);
}
export default AllHeroesPage;