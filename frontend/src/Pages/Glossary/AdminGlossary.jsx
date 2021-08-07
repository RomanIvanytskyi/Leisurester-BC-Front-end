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
import { getData, Delete } from "../../api/api";

const AdminGlossary = () => {
  
  const [data, setData] = useState([]);
  const [lastDeleted, setLastDeleted] = useState("")

  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, []);


  useEffect(() => {
    getData().then((res) => {
      setData(res.data);
    });
  }, [lastDeleted]);
  
  const deleteItem = (id) => {
    Delete(id).then((response) => {
      console.log(response)
      setLastDeleted(response.data)
    })
  }
  
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
                <Button type="submit" onClick={(e) => deleteItem(post._id)} className="btn btn-dark btn-lg btn-block">
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
