import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "react";
export default configureStore({ reducer: { user: userReducer } });
