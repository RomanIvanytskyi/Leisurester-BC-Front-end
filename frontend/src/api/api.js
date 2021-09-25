import axios from "axios";

export const getPost = () => {
  return axios.get("http://localhost:3000/leisure/posts");
};

export const postData = (data) => {
  return axios.post("http://localhost:3000/leisure/newPost", {
    content: data.content,
    name: data.name,
    category: data.category,
    type: data.type,
    persons: data.persons,
    description: data.description,
    file: data.file,
    postId: data.postId,
  });
};

export const register = (data) => {
  return axios.post("http://localhost:3000/auth/registration", {
    email: data.email,
    username: data.username,
    password: data.password,
    userId: data._id,
  });
};

export const login = (data) => {
  return axios.post("http://localhost:3000/auth/login", {
    email: data.email,
    password: data.password,
  });
};

export const Delete = (data) => {
  console.log(data);
  return axios.post("http://localhost:3000/leisure/delete", {
    id: data,
  });
};

export const deleteProposition = (data) => {
  console.log(data);
  return axios.post("http://localhost:3000/leisure/deleteProposition", {
    id: data,
  });
};

export const addProposition = (data) => {
  return axios.post("http://localhost:3000/leisure/addProposition", {
    name: data.name,
    category: data.category,
    type: data.type,
    description: data.description,
    postId: data.postId,
  });
};

export const editPost = (data) => {
  console.log("data -> ", data);
  return axios.post("http://localhost:3000/leisure/editPost", {
    name: data.name,
    category: data.category,
    type: data.type,
    description: data.description,
    id: data.id,
    persons: data.persons,
  });
};

export const getProposition = () => {
  return axios.get("http://localhost:3000/leisure/getProposition", {});
};

export const getRandom = () => {
  return axios.get("http://localhost:3000/leisure/Random", {});
};

export const Logout = () => {
  return axios.post("http://localhost:3000/auth/logout", {});
};

export const meAPI = (token) => {
  return axios.post("http://localhost:3000/auth/me", { token });
};
export const getPage = (id) => {
  console.log(id);
  return axios.post("http://localhost:3000/leisure/getPage", {
    id,
  });
};
export const getUsers = (id) => {
  return axios.get("http://localhost:3000/auth/users");
};

export const postSearch = (name) => {
  return axios.post("http://localhost:3000/leisure/postSearch", {
    name,
  });
};
