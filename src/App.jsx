import { render } from "react-dom";
import Header from './Header';
import Body from './Body';
import NavBar from './NavBar';
import React, { useState } from 'react';
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  
  return (
    <div>
      <Header/>
      <hr/>
      <NavBar setCurrentPage={setCurrentPage}/>
      <Body currentPage={currentPage}/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
