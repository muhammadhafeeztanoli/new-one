import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Product from './pages/Product';
import Categories from './pages/Categories';
import MobileProduct from './pages/MobileProduct';
import MobileCategories from './pages/MobileCategories';

import { useMediaQuery } from "react-responsive";
import './App.css';
import SearchResults from './components/SearchResults';
import MobileSearchResults from './components/MobileSearchResults';



const App = () => {
  const isNonMobileDevice = useMediaQuery({
    query: "(min-device-width: 500px)"
  })

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="home" element={isNonMobileDevice ? <Home /> : <Home />} />
        <Route path="product" element={isNonMobileDevice ? <Product /> : <MobileProduct />} />
        <Route path="categories" element={isNonMobileDevice ? <Categories /> : <MobileCategories />} />
        <Route path={"searchResults"} element={isNonMobileDevice ? <SearchResults /> : <MobileSearchResults />} />
      </Routes>
   
    </>
  )
};

export default App;