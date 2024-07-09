import React, { useState } from "react";
import AdminLogin from "./Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Admin";
import LoginForm from "./Components/Auth/LoginForm/LoginForm";

import Page from "./Components/Auth/LoginForm/Page";
import React1 from "./Components/Auth/LoginForm/React1";
import SignUpForm from "./Components/Auth/LoginForm/SignUpForm";
// import Html1 from "./Components/Html1";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/path" element={<Page />} />
          <Route path="/react" element={<React1 />} />
          <Route path="/SignUpForm" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* <Route path="/path" element={<Page />} />
          <Route path="/html" element={<Html1 />} /> */}
        </Routes>
      </div>
      {/* <div className='Html'>
        <Routes> 
        <Route path="/" element={<Page />} />
        <Route path="/html" element={<HTML1 />} />
        </Routes>
      </div> */}
      {/* <div className='Js'>
        <Routes> 
        <Route path="/" element={<Page />} />
        <Route path="/js" element={<Js1/>} />
        </Routes>
      </div> */}
      {/* <div className='Git'>
        <Routes> 
        <Route path="/" element={<Page />} />
        <Route path="/git" element={<Git1 />} />
        </Routes>
      </div> */}
    </>
  );
}

export default App;
