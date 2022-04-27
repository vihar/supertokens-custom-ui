import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "./components/Forms/SignIn";
import SignUp from "./components/Forms/SignUp";
import ForgotPassword from "./components/Forms/ForgotPassword";
import ResetPassword from "./components/Forms/ResetPassword";

import Home from "./components/Home/Home";

import SuperTokens from "supertokens-website";
import axios from "axios";

SuperTokens.addAxiosInterceptors(axios);

SuperTokens.init({
  apiDomain: "https://supertokens-node-backend-production.up.railway.app",
  apiBasePath: "/auth",
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/auth/forgot" element={<ForgotPassword />} />
        </Routes>
        <Routes>
          <Route path="/index/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
