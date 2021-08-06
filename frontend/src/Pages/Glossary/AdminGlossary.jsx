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

const AdminGlossary = () => {
  debugger
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);

  // const [postId, setpostId] = useState([]);

  // const postID = () => {
  //   Delete().then((res) => {
  //     setpostId(res.postId);
  //   });
  // };

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
              <Card
                // postId={postId}
                body
                style={{ width: "400px", height: "400px" }}
              >
                <CardTitle tag="h5">{post.name}</CardTitle>
                <CardImg
                  top
                  width="100%"
                  src={post.file}
                  style={{ width: "128px" }}
                  alt="Card image cap"
                />
                <CardText>{post.description}</CardText>
                <Button type="button" className="btn btn-dark btn-lg btn-block">
                  More
                </Button>
                <Button type="delete" className="btn btn-dark btn-lg btn-block">
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


export default AdminGlossary;
