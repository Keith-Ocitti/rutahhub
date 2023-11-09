"use client";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/main.css";
import Caption from "./Caption";

const CarouselCom = () => {
  return (
    <div className="carousel-cont">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        autoFocus={true}
      >
        <div className="carousel-img">
          <img src="/img1.jpg" />
          <Caption service="Business Management Services." />
        </div>
        <div className="carousel-img">
          {/* <div className="caption">
            <p>For all your bussiness needs</p>
          </div> */}
          <img src="/visuals.jpg" />
          <Caption service="IT & Graphics Design Services." />
        </div>
        <div className="carousel-img">
          {/* <div className="caption">
            <p>For all your bussiness needs</p>
          </div> */}
          <img src="/fa1.jpg" />
          <Caption service="Agricultural Services." />
        </div>
        <div className="carousel-img">
          <img src="/cons2.jpg" />
          <Caption service={"Engineering and Construction Services."} />
        </div>
        <div className="carousel-img">
          <img src="/events.jpg" />
          <Caption service="Entertainment Services" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCom;
