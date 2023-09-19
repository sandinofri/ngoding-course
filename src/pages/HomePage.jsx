import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";
import { kelasTerbaru, dataSwiper } from "../data/index";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Faq from "../component/Faq";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage ">
      <header className="w-100 min-vh-100 d-flex align-items-center oferflow-hidden">
        <Container>
          <Row className="d-flex align-items-center">
            <Col lg="6">
              <h1
                className="mb-4 animate__animated animate__fadeInUp"
                style={{
                  fontWeight: 600,
                  color: "#231942",
                  textShadow: "1px 1px 2px",
                }}
              >
                temukan <br />
                <span style={{ fontWeight: 700 }}>bakat kreatifmu</span>
                <br /> bersama kami!
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp" style={{ lineHeight: 2, fontWeight: 500 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                ut dicta illum! Non, pariatur ipsum?
              </p>
              <button className="btn btn-danger btn-lg me-2 rounded-1 animate__animated animate__fadeInUp" onClick={()=>navigate("/kelas")}>
                lihat kelas
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 animate__animated animate__fadeInUp">
                lihat promo
              </button>
            </Col>
            <Col className="pt-lg-0 pt-5" lg="6">
              <img src={HeroImage} alt="hero-img" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">kelas terbaru</h1>
              <p className="text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur, alias.
              </p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => (
              <Col
                key={kelas.id}
                style={{ backgroundColor: "#ffffff", padding: 0 }}
                className="shadow rounded"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={kelas.delay}
              >
                <img
                  className=" mb-5 rounded-top"
                  src={kelas.image}
                  alt="unsplash"
                />
                <div>
                  <h5 className="ms-3">{kelas.title}</h5>
                </div>
                <div className="ket d-flex justify-content-between align-items-center pb-3 px-3 ">
                  <p className="m-0 fw-bold text-primary">{kelas.price}</p>
                  <button className="btn btn-danger rounded-1">
                    {kelas.buy}
                  </button>
                </div>
                <div></div>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                className="btn btn-success btn-lg rounded-5"
                onClick={() => {
                  navigate("/kelas");
                }}
              >
                Lihat semua kelas
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimonial py-5">
        <Row>
          <Col>
            <h1 className="text-center fw-bold my-5">testimonial</h1>
          </Col>
        </Row>
        <Row>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dataSwiper.map((data) => (
              <SwiperSlide key={data.id} className="shadow-sm">
                <p className="desc">{data.desc}</p>

                <div className="people">
                  <img src={data.image} alt="" />
                  <div>
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.skill}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </div>
    <Faq/>
    </div>
  );
};

export default HomePage;
