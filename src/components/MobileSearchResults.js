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
import useCollapse from "react-collapsed";
const { Sider, Content } = Layout;

function MobileResults({searchField, rating, priceMin, priceMax}) {
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
        <div className="categories-card-mob">
        <div style={{ display: "flex" }}>
          <img src={e.image} alt={i} width="auto" height="150px"></img>
          <div>
            <p className="title-mob">
              {e.name}
            </p>
            <Rate value={e.rating} disabled={true} size={"small"}></Rate>
            <h4> ${e.price}</h4>
            <p>
              Ships to Your Location
            </p>
            <Link to="/product" state={e} style={{color:"#FF9900"}} >
            Got to Product Page
          </Link>
          </div>
        </div>
      </div>
     );
   })}
   </>
   )
 }

const MobileSearchResults = () => {
  const location = useLocation();
  const searchField = location.state.searchField;

  const [rating, setRating] = useState(1);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(3000);
  
  const isNonMobileDevice = useMediaQuery({
    query: "(min-device-width: 500px)"
  })
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
      <div className="container">
      {isNonMobileDevice ? <NonMobileHeader /> : <MobileHeader /> }
        <div className="results-header">
          <span>Showing Poducts for searched : </span>
          <span className="category">"{searchField}"</span>
        </div>

        <div className="collapsible">
          <Button className="collapsible-btn" {...getToggleProps()}>
              { isExpanded ? 'Collapse Filter' : 'Expand Filter'}
          </Button>
          <div {...getCollapseProps()}>
            <div className="collapsible-content">
              <Sider width="340px" theme="light" style={{ padding: "25px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                  <Rating rating={rating} setRating={setRating} />
                  <PriceRanges priceMin={priceMin} setPriceMin={setPriceMin} priceMax={priceMax} setPriceMax={setPriceMax}/>
                  <Button className="login">Apply Filters</Button>
                  </div>
            </Sider>
            </div>
          </div>
          </div>

        <Layout>
          <Content
            theme="light"
            style={{ padding: "0px 0px 0px 10px", backgroundColor: "white" }}
          >
            <h1 style={{fontSize:"20px"}}>RESULTS</h1>
            <MobileResults searchField={searchField} rating={rating} priceMin={priceMin} priceMax={priceMax}/>
          </Content>

            
        </Layout>
        
      </div>
    </>
  );
};

export default MobileSearchResults;
