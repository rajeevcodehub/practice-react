import React, { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loginUser } = useContext(UserContext);
  return (
    <div>
      <h1>About Us</h1>
      <h1>{loginUser}</h1>
      <UserClass
        name={"Rajeev Kumar"}
        contact={"rajeev1232gmail.com"}
        phone={9087654321}
      />
    </div>
  );
};

export default About;
