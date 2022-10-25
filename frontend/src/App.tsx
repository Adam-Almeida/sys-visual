import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthLogin from "./components/AuthLogin/Index";

import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
      </Routes>
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
