import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import { postData } from "../../api/api";

const NewLeisure = (props) => {
  const resetValues = () => {
    console.log("val");
    formik.values = {
      name: "",
      category: "inHome",
      type: "sport",
      persons: "",
      description: "",
      file: "",
    };
    console.log("val");
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "inHome",
      type: "sport",
      persons: "",
      description: "",
      file: "",
    },
    onSubmit: (values, { resetForm }) => {
      
      console.log("val");
      postData(values);
      console.log("val");
      formik.resetForm();
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
        >
          {" "}
          <option>InHome</option>
          <option>Outdor</option>
        </Input>
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
      <Input
        onChange={formik.handleChange}
        value={formik.values.persons}
        type="number"
        name="persons"
        id="persons"
        placeholder="Кількість учасників"
      />
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
      <FormGroup>
        <Label for="exampleFile">Photo link</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.file}
          type="link"
          name="file"
          id="file"
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default NewLeisure;
