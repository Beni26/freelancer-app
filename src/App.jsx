import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
