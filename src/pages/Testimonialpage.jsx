import { Container, Row, Col } from "react-bootstrap";
import { testimonial } from "../data/index";
import Faq from "../component/Faq";

const Testimonialpage = () => {
  return (
    <div>
      <div className="testimonial-page ">
        <Container>
          <Row className="mb-5">
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp">Semua Testimonial</h1>
              <p className="text-center pb-3 animate__animated animate__fadeInUp">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Magnam, quo!
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-4 row-cols-1 testi">
            {testimonial.map((data) => (
              <Col key={data.id} className=" mb-5 shadow-sm bg-light ">
                <p className="desc ">{data.desc}</p>

                <div className="people">
                  <img src={data.image} alt="" />
                  <div>
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.skill}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Faq />
    </div>
  );
};

export default Testimonialpage;
