import Carousel from "./components/Carousel";
import ExploreTopBooks from "./components/ExploreTopBooks";
import Heros from "./components/Heros";
import LibraryService from "./components/LibraryService";

export default function HomePage() {
    return (
        <>
            <ExploreTopBooks />
            <Carousel />
            <Heros />
            <LibraryService />
        </>
    );
}