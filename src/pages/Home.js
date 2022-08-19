import React from 'react';
import { Link } from "react-router-dom";
import MobileHeader from "../components/MobileHeader";
import NonMobileHeader from "../components/NonMobileHeader";
import { useMediaQuery } from "react-responsive";

import "./Home.css";
import { Carousel, Card } from 'antd';
import Carousel1 from "../images/carousel1.jpeg";
import Carousel2 from "../images/carousel2.jpeg";
import Carousel3 from "../images/carousel3.jpeg";
import iPhone from "../images/iphone4.webp";
import Oneplus from "../images/oneplus.jpeg";
import Pixel from "../images/pixel.jpeg";
import Galaxy from "../images/galaxy1.jpeg";


const carousel = [Carousel1,Carousel2,Carousel3];
const catCard = [iPhone,Pixel,Galaxy,Oneplus];

const Home = () => {

const isNonMobileDevice = useMediaQuery({
  query: "(min-device-width: 500px)"
})
const bannerClass = isNonMobileDevice ? "carousel-img" : "carousel-img-mob";
const cardsClass = isNonMobileDevice ? "cards" : "cards-mob";
const cardClass = isNonMobileDevice ? "card" : "card-mob";
const cardContentClass = isNonMobileDevice ? "card-content" : "card-content-mob";
const linkClass = isNonMobileDevice ? "link" : "link-mob";
const secondCard = isNonMobileDevice ? "single-card" : "card";
const singleCardContent = isNonMobileDevice ? "single-card-content" : "card-content-mob";

return(
  <>
  <div className="container">
    {isNonMobileDevice ? <NonMobileHeader /> : <MobileHeader /> }
    <Carousel autoplay className="carousel">
    {carousel.map((e) => {
        return <img src={e} className={bannerClass}  alt="carousel"></img>;
    })}
    </Carousel>
    <div className={cardsClass}>  
      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>iPhone</h1> : <h2>iPhone</h2> }
        <img src="https://cdn.shopify.com/s/files/1/0568/5942/7015/files/16490519144_1024x1024_crop_center.png?v=1649070595" alt="Comics Category" className={cardContentClass}></img>
        <br />
        <Link to="/categories" state={"iPhone"} className={linkClass}>
          Shop Now
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>MacBook</h1> : <h2>MacBook</h2> }
        <img src="https://cdn.shopify.com/s/files/1/0568/5942/7015/files/16490519155_1024x1024_crop_center.png?v=1649070648" alt="Artemis Fowl" className={cardContentClass}></img>
        <br />
        <Link to="/categories" state={"Macbook"} className={linkClass}>
          Shop Now
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>iPad</h1> : <h2>iPad</h2> }
        <img src="https://cdn.shopify.com/s/files/1/0568/5942/7015/files/16490519140_1024x1024_crop_center.png?v=1649070612" alt="Comics Category" className={cardContentClass}></img>
        <br />
        <Link to="/categories" state={"iPad"} className={linkClass}>
          Shop Now
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>Pixel</h1> : <h2>Pixel</h2> }
        <img src="https://ik.imagekit.io/edo9bzqhd3/pixel_fJNdvwXrE.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659852469519" alt="Comics Category" className={cardContentClass}></img>
        <br />
        <Link to="/categories" state={"Pixel"} className={linkClass}>
          Shop Now
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>Pixel 6 Pro</h1> : <h2>Pixel 6 Pro</h2> }
        <img src="https://lh3.googleusercontent.com/j-pw5ejAM2XLqnKALXuaOL-8eHCrLHpugEWgABgf6Q5JSLsssqOmcrEZ9jtylzDwLpQ9J9IDzz543QogYFV859X1IKaK0R4yug6J=rw-e365-w800" alt="Moby Dick" className={cardContentClass}></img>
        <br />
        <Link to="/product" state={
          {name:"Google - Pixel 6 Pro 256GB (Unlocked) - Cloudy White", 
          price: 999,
          rating: 5,
          image:"https://lh3.googleusercontent.com/j-pw5ejAM2XLqnKALXuaOL-8eHCrLHpugEWgABgf6Q5JSLsssqOmcrEZ9jtylzDwLpQ9J9IDzz543QogYFV859X1IKaK0R4yug6J=rw-e365-w800",
          about:
          "Introducing Pixel 6 Pro, the completely redesigned, fully loaded Google 5G phone.* With a powerful camera system, next-gen security, and the custom-built Google Tensor processor, it’s the smartest and fastest Pixel yet.",
          }
          } className={linkClass}>
          View Product
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>Pixel 6</h1> : <h2>Pixel 6</h2> }
        <img src="https://lh3.googleusercontent.com/lVkBWoCXR-JJgJtAolfDYwXeqYRKWQCYmO78-Pir5mm8jnJY0j7ydFPum2S65UDtDGYiF6yRZ6VpNaw0Z7XEfyMOH3pDwtQfRA=rw-e365-w800" alt="Moby Dick" className={cardContentClass}></img>
        <br />
        <Link to="/product" state={
          {name:"Google - Pixel 256GB (Unlocked) - Sorta Seafoam", 
          price: 699,
          rating: 5,
          image:"https://lh3.googleusercontent.com/lVkBWoCXR-JJgJtAolfDYwXeqYRKWQCYmO78-Pir5mm8jnJY0j7ydFPum2S65UDtDGYiF6yRZ6VpNaw0Z7XEfyMOH3pDwtQfRA=rw-e365-w800",
          about:
          "Meet Pixel 6. It’s completely reimagined, inside and out. Powered by Tensor, Google’s first-ever processor, it’s fast, smart, and secure. The all-day battery adapts to you. The Pixel Camera captures a moment just how you experienced it. And the Personal Safety app and the new Titan M2TM chip help protect you, your stuff, and your privacy.",
          }
          } className={linkClass}>
          View Product
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>Galaxy</h1> : <h2>Galaxy</h2> }
        <img src="https://ik.imagekit.io/edo9bzqhd3/galaxy__1__5ER19P7YQ.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659853525239" alt="Galaxy Category" className={cardContentClass}></img>
        <br />
        <Link to="/categories" state={"Galaxy"} className={linkClass}>
          Shop Now
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>Oneplus</h1> : <h2>Oneplus</h2> }
        <img src="https://ik.imagekit.io/edo9bzqhd3/oneplus_lR3KEA5yu.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1659853760716" alt="Oneplus Category" className={cardContentClass}></img>
        <br />
        <Link to="/categories" state={"Comics"} className={linkClass}>
          Shop Now
        </Link>
      </Card>

      <Card className={cardClass}>
        {isNonMobileDevice ? <h1>Shop By Category</h1> : <h2>Shop By Category</h2> }
        <div className={cardContentClass}>
          {catCard.map((e) => {
            return (
              <img
                src={e}
                alt="category"
                className="card-category"
                onClick={() => console.log("beauty")}
              ></img>
            );
          })}
          <br />
          <Link to="/" className={linkClass}>
            Shop All
          </Link>
        </div>
      </Card>

      
      
      <Card className={secondCard}>
        {isNonMobileDevice ? <h1>13-inch MacBook Pro</h1> : <h2>16-inch MacBook Pro</h2> }
        <img src="https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MK1A3HN_A_1.png?v=1634727910" alt="Macbook Category" className={singleCardContent}></img>
        <br />
        <Link to="/product" state={
          {  name: "MacBook Pro 13-inch, M2 chip, 256gb, Space Gray",
          price: 1299,
          rating: 5,
          image: "https://cdn.shopify.com/s/files/1/0568/5942/7015/products/MK1A3HN_A_1.png?v=1634727910",
          about:
            "MacBook Pro 13”. Supercharged by M2. The 13-inch MacBook Pro is more capable than ever. Supercharged by the next-generation M2 chip, it’s Apple’s most portable pro laptop, with up to 20 hours of battery life. Features Ready. Set. Pro. M2 chip with next-generation CPU, GPU, and machine learning performance Faster...",
        }
        } className={linkClass}>
          View Product
        </Link>
      </Card>        

    </div>
  </div>
  </>
)
}

export default Home;
