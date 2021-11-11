
import NavBar from "./Components/NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import styled from "styled-components";

function App() {
  return (
    <AppStyled>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </div>
      </Router>
    </AppStyled>
  );
}

const AppStyled = styled.div`
width: 100%;

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #b5fac7;
}

.pages {
  color: #316685;
  text-align: center;
  font-size: 3.5rem;
  margin-top: 10%;
}
`;


export default App;



