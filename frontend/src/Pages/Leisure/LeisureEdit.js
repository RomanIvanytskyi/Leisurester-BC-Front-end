import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useFormik } from "formik";
import { editPost, getPage } from "../../api/api";

const LeisureEdit = (props) => {
  const [data, setData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getLocation().then((response) => {
      getPage(response.pathname.split("/")[2]).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLocation = async () => {
    let loc = await location;
    return loc;
  };

  const formik = useFormik({
    initialValues: {
      name: data.name,
      category: data.category,
      type: data.type,
      description: data.description,
      file: data.file,
      persons: data.persons,
    },

    onSubmit: (values, { resetForm }) => {
      editPost({ ...values, id: data._id });
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup>
        <Label for="name">{data.name}</Label>
        <Input
          onChange={formik.handleChange}
          value={formik.values.name}
          defaultValue={data.name}
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
          defaultValue={data.category}
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
          defaultValue={data.type}
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
        defaultValue={data.persons}
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
          defaultValue={data.description}
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
          defaultValue={data.file}
          type="link"
          name="file"
          id="file"
        />
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LeisureEdit;
