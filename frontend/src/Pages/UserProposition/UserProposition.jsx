import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import { proposition } from "../../api/api";

const Proposition = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "inHome",
      type: "sport",
      description: "",
    },
    onSubmit: (values) => {
      proposition(values);
      
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label for="name">Name of Leisure</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="textarea"
          name="name"
          id="name"
          placeholder="Назва заняття"
        />
      </FormGroup>
      <FormGroup>
        <Label for="category">Категорія</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.category}
          type="select"
          name="category"
          id="category"
        > <option>InHome</option>
        <option>Outdor</option></Input>
      </FormGroup>
      <FormGroup>
        <Label for="type">Select</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.type}
          type="select"
          name="type"
          id="type"
        >
          <option>sport</option>
          <option>boardgame</option>
          <option>strategy</option>
          <option>educational</option>
          <option>single</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="description">Опис заняття</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.description}
          type="textarea"
          name="description"
          id="description"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Proposition;
