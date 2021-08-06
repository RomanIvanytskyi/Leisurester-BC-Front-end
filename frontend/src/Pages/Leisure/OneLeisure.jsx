import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { getData } from "../../api/api";


const Leisure = () => {
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
                <CardImg
                  top
                  width="100%"
                  src={post.file}
                  style={{ width: "128px" }}
                  alt="Card image cap"
                />
                <CardText>{post.description}</CardText>
                <CardText>{post.type}</CardText>
                <CardText>{post.persons}persons</CardText>
                <Button type="button" className="btn btn-dark btn-lg btn-block">
                  More
                </Button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Leisure;
