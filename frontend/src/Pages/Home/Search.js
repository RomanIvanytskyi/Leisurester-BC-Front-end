import React, { useState, useEffect } from "react";
import { getPost, postSearch } from "../../api/api";
import classes from "../../Components/Layouts/AdminLayout.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button, Container, FormControl, Form } from "react-bootstrap";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useFormik } from "formik";

const Search = ({ posts, dispatch }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPost().then((res) => {
      setData(res.data);
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      if (!formik.values.name) {
        getPost(null);
      }
      postSearch(values.name).then((res) => {
        setData(res.data.posts);
      });
    },
  });

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <Form className={classes.formEl} inline>
            <FormControl
              type="textbox"
              placeholder="Search"
              className="mr-sm-2"
              onChange={formik.handleChange}
              value={formik.values.name}
              name="name"
              id="name"
            />
          </Form>
          <Button type="submit">Search</Button>
        </div>

        {data.map((post) => {
          return (
            <div>
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
                    <Nav.Link as={Link} to={`/oneLeisure/${data._id}`}>
                      More
                    </Nav.Link>
                  </CardActions>
                </Card>
              </Container>
            </div>
          );
        })}
      </Form>
    </div>
  );
};

export default Search;
