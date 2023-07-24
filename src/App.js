import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/NavigationPage";

import HomePage from "./Components/HomePage";
import Shop from "./routes/Shop";
import SignIn from "./routes/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
