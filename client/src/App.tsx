import Footer from './layouts/common/Footer';
import Navbar from './layouts/common/Navbar';
import Carousel from './layouts/home/Carousel';
import ExploreTopBooks from './layouts/home/ExploreTopBooks';
import Heros from './layouts/home/Heros';
import LibraryService from './layouts/home/LibraryService';

function App() {

  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryService />
      <Footer />
    </>
  )
}

export default App
