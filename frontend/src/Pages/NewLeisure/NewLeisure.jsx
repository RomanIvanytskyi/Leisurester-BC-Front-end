import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import { postData } from "../../api/api";

const NewLeisure = (props) => {
  const resetValues = () => {
    console.log('val')
    formik.values = {
      name: "",
      category: "",
      type: "sport",
      persons: "",
      description: "",
      file: "",
    };
    console.log('val')
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      type: "sport",
      persons: "",
      description: "",
      file: "",
    },

    onSubmit: (values,{update }, { resetForm }) => {
      debugger
      console.log('val')
      // postData(values);
      console.log('val')
      resetValues();
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit.bind(this)}>
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
          type="textarea"
          name="category"
          id="category"
          placeholder="Категорія заняття"
        />
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
         <Button type='submit' bsStyle='success'>Submit</Button>
         <Button type='submit' bsStyle='success'>Submit</Button>
      </FormGroup>

     
    </Form>
  );
};

export default NewLeisure;
