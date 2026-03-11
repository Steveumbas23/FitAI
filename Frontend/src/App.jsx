import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/index.jsx";
import Programs from "./Programs/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App
