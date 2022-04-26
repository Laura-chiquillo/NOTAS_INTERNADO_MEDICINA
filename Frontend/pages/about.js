import React from "react";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Card,
  Input,
  FormText,
  CardSubtitle,
} from "reactstrap";
import Image from "next/image";
import simg from "../src/assets/images/background/icons2.jpg";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardBody>

            <Row>
               <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>
                This is some placeholder block-level help text for the above input. Its a bit
                lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
                      </Row>
          </CardBody>
        </Card>
        
      </Col>
    </Row>
  );
};

export default About;
