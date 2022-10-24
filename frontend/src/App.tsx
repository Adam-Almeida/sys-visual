import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<p>Login</p>} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
};

export default App;
