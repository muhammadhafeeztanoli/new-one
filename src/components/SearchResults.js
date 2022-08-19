import React from "react";
import { Button, Layout, Card, Rate } from "antd";
import { useLocation } from "react-router";
import MobileHeader from "./MobileHeader";
import NonMobileHeader from "./NonMobileHeader";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Rating from "./Rating";
import PriceRanges from "./PriceRanges";
import "./Results.css";
import {books} from "../books.js";
import { Link } from 'react-router-dom';

const { Sider, Content } = Layout;

function Results({searchField, rating, priceMin, priceMax}) {
  const all = []

  Object.keys(books).map((key, index) => (
    all.push(books[key].filter(
      product => {
        return(
          product
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    ))
  ));

  const allConcatenatedResult = all.flat();

  const filteredProduct = allConcatenatedResult.filter(x => x.rating >= rating).filter(x => x.price > priceMin).filter(x => x.price <= priceMax);
   
   return (
     <>
   {filteredProduct.map((e,i) => {
     return (
       <Card>
       <div style={{ display: "flex" }}>
         <img src={e.image} alt={i} width="300px"></img>
         <div>
           <p className="title">
             {e.name}
           </p>
           <Rate value={e.rating} disabled={true}></Rate>
           <h2> ${e.price}</h2>
           <p>
             Ships to Your Location
           </p>
           <Link to="/product" state={e} className="login">
           Got to Product Page
         </Link>
         </div>
       </div>
     </Card>
     );
   })}
   </>
   )
 }

const SearchResults = () => {
  const location = useLocation();
  const searchField = location.state.searchField;
  
  const [rating, setRating] = useState(1);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(3000);
  
  const isNonMobileDevice = useMediaQuery({
    query: "(min-device-width: 500px)"
  })
  
  return (
    <>
      <div className="container">
      {isNonMobileDevice ? <NonMobileHeader /> : <MobileHeader /> }
        <div className="results-header">
          <span>Showing Poducts for searched : </span>
          <span className="category">"{searchField}"</span>
        </div>

        <Layout>
          <Sider width="340px" theme="light" style={{ padding: "25px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Rating rating={rating} setRating={setRating} />
            <PriceRanges priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}/>
            <Button className="login">Apply Filters</Button>
            </div>
          </Sider>

          <Content
            theme="light"
            style={{ padding: "35px", backgroundColor: "white" }}
          >
            <h1 style={{fontSize:"30px"}}>RESULTS</h1>
            <Results searchField={searchField} rating={rating} priceMin={priceMin} priceMax={priceMax}/>
          </Content>
        </Layout>

        
      </div>
    </>
  );
};

export default SearchResults;
