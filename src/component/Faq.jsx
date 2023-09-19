import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data";
const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold pb-3 pt-5 animate__animated animate__fadeInUp">
              pertanyaan yang sering ditanyakan
            </h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
          {faq.map((item)=>(
            <Col key={item.id}>
            <Accordion className="shadow-sm">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                 {item.desc}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </Col>
          ))}
         
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
