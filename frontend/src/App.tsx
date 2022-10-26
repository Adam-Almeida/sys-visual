import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";

import AuthLogin from "./pages/AuthLogin/Index";
import DashboardClient from "./pages/DashboardClient/Index";


export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<DashboardClient />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<AuthLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
