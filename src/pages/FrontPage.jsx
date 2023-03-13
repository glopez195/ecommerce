import React from "react";
import { Footer, Card } from "../components";
import tech_photo from '../imgs/tech-photo.jpeg';
import electronics from '../imgs/electronics.jpg';
import makeup from '../imgs/make-up.jpg';
import male from '../imgs/male.jpeg';
import female from '../imgs/women-clothes.jpeg';
import others from '../imgs/others.jpg';
import surprise_box from '../imgs/surprise-box.png';
import gamers from '../imgs/gamers.jpg';
const FrontPage = () => {
  return (
    <div className=" bg-paragraph">
      <div className="flex justify-center gap-10 pt-28 mb-5 p-5 w-full flex-wrap">
        <Card
          title="Discover the best sellers"
          subtitle="Explore now"
          item= {tech_photo}
        />
        <Card
          title="Lightning Deals"
          subtitle="See offers"
          item= {male}
        />
        <Card
          title="Surprises for you"
          subtitle="See more"
          item= {surprise_box}
        />
        <Card
          title="Last tendencies"
          subtitle="Know more here"
          item= {female}
        />
        <Card
          title="Our Tech selection"
          subtitle="Find out!"
          item= {electronics}
        />
        <Card
          title="Buy it your way"
          subtitle="See more"
          item= {makeup}
        />
        <Card
          title="For the Gamers"
          subtitle="Don't miss out"
          item= {gamers}
        />
        <Card
          title="Take advantage of exclusive offers"
          subtitle="Explore offers"
          item={others}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
