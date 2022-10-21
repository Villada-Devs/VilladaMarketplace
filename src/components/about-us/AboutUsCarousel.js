import Carousel from 'react-bootstrap/Carousel';

import UPF1 from "../../img/about-us/UPF-1.jpg";
import UPF3 from "../../img/about-us/UPF-3.jpg";
import UPF4 from "../../img/about-us/UPF-4.jpg";
import UPF5 from "../../img/about-us/UPF-5.jpg";
import UPF6 from "../../img/about-us/UPF-6.jpg";
import UPF7 from "../../img/about-us/UPF-7.jpg";

import "../../styles/about-us/AboutUs.css"

function AboutUsCarousel() {

    return(

        <Carousel className="about-carousel" fade>

                <Carousel.Item className="about-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 about-carousel-img"
                    src={UPF1}
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item className="about-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 about-carousel-img"
                    src={UPF3}
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item className="about-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 about-carousel-img"
                    src={UPF4}
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item className="about-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 about-carousel-img"
                    src={UPF5}
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item className="about-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 about-carousel-img"
                    src={UPF6}
                    alt="First slide"
                />
                </Carousel.Item>

                <Carousel.Item className="about-carousel-item" interval={2000}>
                    <img
                    className="d-block w-100 about-carousel-img"
                    src={UPF7}
                    alt="First slide"
                />
                </Carousel.Item>

            </Carousel>

    );

}

export default AboutUsCarousel