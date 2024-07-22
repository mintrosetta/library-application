import Navbar from './layouts/common/Navbar';
import Carousel from './layouts/home/Carousel';
import ExploreTopBooks from './layouts/home/ExploreTopBooks';
import Heros from './layouts/home/Heros';

function App() {

  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
    </>
  )
}

export default App
