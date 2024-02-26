import React, { createContext } from "react";

const UserContext = createContext ({
    loginUser: "Default Name"
});

export default UserContext;