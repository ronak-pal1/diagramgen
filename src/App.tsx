import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Pricing from "./pages/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
