import axios from "axios";

export const getData = () => {
  return axios.get("http://localhost:3000/getData");
};

export const postData = (data) => {
  return axios.post("http://localhost:3000/postData", {
    content: data.content,
    name: data.name,
    category: data.category,
    type: data.type,
    persons: data.persons,
    description: data.description,
    file: data.file,
    postId: data.postId
  });
};

export const register = (data) => {
  return axios.post("http://localhost:3000/register", {
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    login: data.login,
    password: data.password,
  });
};

export const login =(data) =>{
    console.log("sdasdasd")
    return axios.post("http://localhost:3000/login",{
        email: data.email,
        password: data.password,
        userId: data.userId,
        type: data.type
    });
};

export const Delete =(data)=>{
    console.log(data)
    return axios.post("http://localhost:3000/deleteData",{
      id: data
}
);
};

export const proposition = (data) => {
  return axios.post("http://localhost:3000/proposition", {
    content: data.content,
    name: data.name,
    category: data.category,
    type: data.type,
    description: data.description,
    postId: data.postId
  });
};

export const getProposition = () => {
  return axios.get("http://localhost:3000/getProposition", {
  });
};

export const getRandom = () => {
  return axios.get("http://localhost:3000/getRandom", {
  });
};
