import React from "react";

const UserContext = React.createContext();

export default UserContext;

// Notes
//1) First step is to create a Context, there could be many context, one for login, card
//2) create a Provider for the context, so that all components which wrapped inside it will have aceess of this provider


