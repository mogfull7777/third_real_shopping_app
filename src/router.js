import React from 'react';
import {Button} from "@mui/material";
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import FindEmail from "./pages/FindEmail";
import ForgotPassword from "./pages/ForgotPassword";
import SandPhoneNumber from "./pages/SandPhoneNumber";
import ChangePassword from "./pages/ChangePassword";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main />
    },
    {
        path : '/signup',
        element : <SignUp />
    },
    {
        path : '/login',
        element : <Login />
    },
    {
        path : '/profile',
        element : <Profile />
    },
    {
        path : '/find/email',
        element : <FindEmail />
    },
    {
        path : '/forgot/password',
        element : <ForgotPassword />
    },
    {
        path : '/sand/phone',
        element : <SandPhoneNumber />
    },
    {
        path : '/change/password',
        element : <ChangePassword />
    }

])

export default Router;