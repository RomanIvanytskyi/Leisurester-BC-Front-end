// import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { getQuestions} from "../../../Axios/api";
import {Carousel } from "react-bootstrap";
import {Input,Button, Label,} from "reactstrap"
import classes from "./Test.module.css"
import { useFormik } from "formik";

const Test = () => {


const formik = useFormik({
  initialValues: {
    q1: {
      qText:"",
      answer: "",
    },
    q2: {
      qText:"",
      answer: "",
    },
    q3: {
      qText:"",
      answer: "",
    },
    q4: {
      qText:"",
      answer: "",
    },
    q5: {
      qText:"",
      answer: "",
    },
    q6: {
      qText:"",
      answer: "",
    },
    q7: {
      qText:"",
      answer: "",
    },
    q8: {
      qText:"",
      answer: "",
    },
    q9: {
      qText:"",
      answer: "",
    },
    q10: {
      qText:"",
      answer: "",
    },
    nickname:"",
  },
  onSubmit: (values) => {
 
  },
});
  
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    getQuestions().then((response) => {
      response.data.data.forEach((item) =>{

      } )
      console.log(response.data.data);
      setQuestion([...response.data.data]);
    });
  }, []);
  return (
    <div>
      <Carousel variant="dark">
        {question.map((q) => {
          return (
            <Carousel.Item >
              <img
                alt=""
                className="d-block w-100"
                src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"
              ></img>
              <Carousel.Caption>
                <h3>{q.qText}</h3>
                {q.answerList.map((item) => {
                  return (<div>
                  <div><button className={classes.TestBtn} >{item}</button></div>
                  </div>); 
                })}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      
        <Label for="name">Nickname</Label>
        <Input type="text"/>
        <Button>Submit</Button>
    </div>
 );
};
export default Test;
