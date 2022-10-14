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
          title="Descubre los productos más vendidos"
          subtitle="Explora ahora"
          item= {tech_photo}
        />
        <Card
          title="Ofertas relámpago"
          subtitle="Descubre todas las ofertas"
          item= {male}
        />
        <Card
          title="Tenemos una sorpresa para ti"
          subtitle="Ver más"
          item= {surprise_box}
        />
        <Card
          title="Las últimas tendencias"
          subtitle="Saber más"
          item= {female}
        />
        <Card
          title="Nuestra selección Tech"
          subtitle="Descúbrelos"
          item= {electronics}
        />
        <Card
          title="Llévalo a tu manera"
          subtitle="Ver más"
          item= {makeup}
        />
        <Card
          title="Para los GAMERS"
          subtitle="No te lo pierdas aquí"
          item= {gamers}
        />
        <Card
          title="Saca el provecho a Ofertas exclusivas"
          subtitle="Ver más"
          item={others}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
