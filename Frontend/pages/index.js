import Forms from "./ui/login";
import { Col, Row } from "reactstrap";

export default function Home() {

  return (
      <div>
        <Row>
          <Col sm="12" lg="6" xl="7" xxl="8">
            <Forms />
          </Col>
        </Row>
      </div>
  );
}
