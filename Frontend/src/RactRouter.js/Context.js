import React, { createContext, useEffect, useState } from "react";

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

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
