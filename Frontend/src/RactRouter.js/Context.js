import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Context = createContext(null);

export default function MyContext(props) {
  const [user, setUser] = useState({
    userId: "",
    name: "Dhrumit",
    email: "dhrumit panchal",
    contact: "9725398019",
    gender: "male",
    address: "c 54/61 shree nath app nava vadaj ahemdabad",
    userRole: "client",
    birthday: "30072004",
    category: "",
  });

  const register = async (name, email, password, role) => {
    const jsonedata = JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
    });

    console.log("data " + jsonedata);

    try {
      const response = await axios.post(
        "http://localhost:8100/api/auth/signup",
        jsonedata
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const login = async (data) => {
    const jsonedata = JSON.stringify(data);
    try {
      const response = await axios.post(
        "http://localhost:/8100/api/auth/login",
        jsonedata
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handelAddWork = async (data) => {
    const jsonedata = JSON.stringify(data);
    console.log(jsonedata)
    try {
      const response = await axios.post(
        "http://localhost:8100/api/work/add",
        {...jsonedata}
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        register,
        login,
        handelAddWork,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
