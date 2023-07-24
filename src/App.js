import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/NavigationPage";

import HomePage from "./Components/HomePage";
import Shop from "./routes/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
