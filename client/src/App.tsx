import Footer from './layouts/common/Footer';
import Navbar from './layouts/common/Navbar';
import HomePage from './layouts/home/HomePage';
import SearchBookPage from './layouts/search/SearchBookPage';

export default function App() {

  return (
    <>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBookPage />
      <Footer />
    </>
  )
}
