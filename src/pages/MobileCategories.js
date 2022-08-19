import React from "react";
import { Button, Layout } from "antd";
import { useLocation } from "react-router";
import MobileHeader from "../components/MobileHeader";
import NonMobileHeader from "../components/NonMobileHeader";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Rating from "../components/Rating";
import PriceRanges from "../components/PriceRanges";
import MobileResults from "../components/MobileResults";
import useCollapse from "react-collapsed";

const { Sider, Content } = Layout;

const MobileCategories = () => {
  const { state: category } = useLocation();
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
          <span>Showing Poducts for </span>
          <span className="category">"{category}"</span>
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
            <MobileResults category={category} rating={rating} priceMin={priceMin} priceMax={priceMax}/>
          </Content>

            
        </Layout>
        
      </div>
    </>
  );
};

export default MobileCategories;
