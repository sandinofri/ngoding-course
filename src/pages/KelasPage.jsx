import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import Faq from "../component/Faq";

const KelasPage = () => {
  return (
    <div>
      <div className="kelas-page min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp ">
                Semua kelas
              </h1>
              <p className="text-center animate__animated animate__fadeInUp ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                quidem!
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => (
              <Col
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={kelas.delay}
                key={kelas.id}
                style={{ backgroundColor: "#ffffff", padding: 0 }}
                className="shadow rounded"
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
        </Container>
      </div>
      <Faq />
    </div>
  );
};

export default KelasPage;
