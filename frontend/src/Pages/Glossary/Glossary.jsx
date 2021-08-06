import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
} from "reactstrap";
import { getData } from "../../api/api";
const Glossary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <Row
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        {data.map((post) => {
          return (
            <Col sm="6">
              <Card body style={{ width: "400px", height: "400px" }}>
                <CardTitle tag="h5">{post.name}</CardTitle>
                <CardText>{post.description}</CardText>
                <Badge color="success" >{post.category}</Badge>
                <Badge color="info">{post.type}</Badge>
                <Button type="submit" className="btn btn-dark btn-lg btn-block">
                  Delete
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Glossary;
