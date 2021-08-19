import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { getPost } from "../../api/api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: 15,
    align: "center",
  },
  media: {
    height: 140,
  },
  fone: {
    backgroundImage: "url(https://source.unsplash.com/random/)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    maxWidth: "auto",
  },
}));

const Glossary = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getPost().then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    getPost().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={classes.fone}>
      <Row
        lg={{ span: 6, offset: 3 }}
        md={{ span: 8, offset: 2 }}
        sm={{ span: 12 }}
      >
        {data.map((post) => {
          return (
            <Col sm="6">
              <Container fixed className={classes.container}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={post.file}
                      alt="Card image cap"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {post.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Nav.Link as={Link} to={`/oneLeisure/${post._id}`}>
                      More
                    </Nav.Link>
                  </CardActions>
                </Card>
              </Container>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Glossary;
