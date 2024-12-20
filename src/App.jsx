import React, { useState } from "react";
import Card from "./Card";
import Nav from "./Nav";
import Login from "./Login";
import Buy from "./Buy";
import Api from "./Api";

export const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Nav onhandle={handleLogin} />
      <Card />
      <Login />
      {/* <Api/> */}
    </>
  );
};

export default App;
