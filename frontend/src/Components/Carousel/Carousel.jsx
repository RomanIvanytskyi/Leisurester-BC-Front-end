// import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { getRandom } from "../../api/api";
import { Carousel } from "react-bootstrap";
import { Button } from "reactstrap";

const Carouselka = () => {
  //eslint-disable-next-line
  const [refresh, setRefresh] = useState(0);
  const [random, setRandom] = useState([]);
  const [restart, setRestart] = useState(" ")
  useEffect(() => {
    getRandom().then((response) => {
      response.data.data.forEach((item) => {});
      console.log(response.data.data);
      setRandom(
        response.data.data.map((item) => {
          return {
            name: item.name,
            category: item.category,
            type: item.type,
            description: item.description,
            postId: item.postId,
            file: item.file
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    getRandom().then((res) => {
      getRandom(res.data);
    });
  }, [restart]);
  
  const restartpage = (id) => {
    getRandom().then((response) => {
      console.log(response)
      setRestart(response.data)
    })
  }

  return (
    <div>
      <Carousel variant="dark">
        {random.map((q) => {
          return (
            <Carousel.Item key={q.postId}>
              <img
                alt=""
                className="d-block w-100"
                src={q.file}
              ></img>
              <Carousel.Caption>
                <div>
                  <h3>{q.name}</h3>
                  <div>{q.type}</div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Button onClick = {(e)=>restartpage}>Random</Button>
    </div>
  );
};
export default Carouselka;
