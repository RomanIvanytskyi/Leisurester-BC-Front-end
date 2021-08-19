import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPage } from "../../api/api";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Leisure.module.css";
const Leisure = (props) => {
  const location = useLocation();
  const [data, setData] = useState(null);

  useEffect(() => {
    getLocation().then((response) => {
      getPage(response.pathname.split("/")[2]).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    });
    //eslint-disable-next-line
  }, []);

  const getLocation = async () => {
    let loc = await location;
    return loc;
  };

  return (
    <div>
      {data ? (
        <div>
          <Card
            className={classes.card}
            // postId={postId}
            body
          >
            <div className={classes.carddetail}>
              <CardTitle tag="h5" className={classes.cardname}>
                {data.name}
              </CardTitle>
              <CardImg
                className={classes.cardImg}
                top
                width="100%"
                src={data.file}
                style={{ width: "128px" }}
                alt="Card image cap"
              />

              <CardText>{data.persons} persons</CardText>
              <CardText>{data.category}</CardText>
              <CardText>{data.description}</CardText>
              <div>
                <Nav.Link as={Link} to={`/ `}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={`/editPost/${data._id}`}>
                  Edit
                </Nav.Link>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default Leisure;
