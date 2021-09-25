// import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { getRandom } from "../../api/api";
import { Carousel, Nav } from "react-bootstrap";
import { Button } from "reactstrap";
import classes from "./carousel.module.css";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const Carouselka = () => {
  //eslint-disable-next-line
  const [refresh, setRefresh] = useState(0);
  const [random, setRandom] = useState([]);
  const [restart, setRestart] = useState(" ");
  useEffect(() => {
    getRandom().then((response) => {
      response.data.forEach((item) => {});
      setRandom(
        response.data.map((item) => {
          return {
            name: item.name,
            category: item.category,
            type: item.type,
            description: item.description,
            id: item.id,
            file: item.file,
          };
        })
      );
    });
  }, []);

  const refreshPage = () => {
    setRefresh(refresh + 1);
  };

  useEffect(() => {
    getRandom().then((response) => {
      getRandom(response.data);

      setRandom(
        response.data.map((item) => {
          return {
            name: item.name,
            category: item.category,
            type: item.type,
            description: item.description,
            id: item.id,
            file: item.file,
          };
        })
      );
    });
  }, [restart]);

  const restartpage = (item) => {
    getRandom().then((response) => {
      setRestart(response.data);
      refreshPage();
    });
  };

  return (
    <div>
      <Container fixed>
        <Carousel className={classes.carousel} variant="dark">
          {random.map((q) => {
            return (
              <Carousel.Item className={classes.carouselitem} key={q.id}>
                <div className={classes.image}>
                <img alt="" className="d-block w-100" src={q.file}></img>
               
                <Carousel.Caption>
                  <div>
                    <h3>{q.name}</h3>
                    <div>{q.type}</div>
                    <div>
                      {" "}
                      <Nav.Link as={Link} to={`/oneLeisure/${q.id}`}>
                        More
                      </Nav.Link>
                     
                    </div>
                  </div>
                </Carousel.Caption>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <div className={classes.case}>
          <Button
            className={classes.Random}
            type="button"
            onClick={(e) => restartpage()}
          >
            Random
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default Carouselka;
