import { Container, Form, FloatingLabel } from "react-bootstrap";
import "../../Assets/styles/_contact-styles.scss";
import Button from "../common/Button";

export default () => {
  return (
    <div id="contact" className="contact">
      <Container className="my-container-contact">
        <div className="my-container__h2-form">
          <h2 class="contact-h2">
            Get in touch<span> We are hiring!</span>
          </h2>
          <div className="my-form">
            <FloatingLabel
              controlId="floating-inp"
              label="Name"
              className="tt mb-4"
            >
              <Form.Control type="text" placeholder="###" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Email"
              className="mb-4"
            >
              <Form.Control type="email" placeholder="###" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Phone"
              className="mb-4"
            >
              <Form.Control type="phone" placeholder="###" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floating-inp"
              label="Message"
              className="mb-4"
            >
              <Form.Control
                as="textarea"
                placeholder="###"
                style={{ height: "10rem", paddingTop: "2rem" }}
              />
            </FloatingLabel>

            <Container className="container-button">
              <Button />
            </Container>
          </div>
        </div>
        <div class="contact-img"></div>
      </Container>
    </div>
  );
};
