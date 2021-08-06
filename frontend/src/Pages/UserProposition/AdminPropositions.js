import React, { useState, useEffect } from "react";
import {
  Card,

  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Badge,
  NavLink,
} from "reactstrap";
import {getProposition } from "../../api/api";
import Leisure from "../Leisure/OneLeisure";
import { Route, } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import paths from "./../../router/paths"
const AdmProposition = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProposition().then((res) => {
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
                <Route path="/leisure" component={Leisure} />
               <NavLink as={Link} to={paths.leisure}> More </NavLink>
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

export default AdmProposition;

