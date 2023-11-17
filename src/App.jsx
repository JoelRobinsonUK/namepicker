import Add from "./components/Add";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Picker from "./components/Piccker";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App h-screen w-screen flex flex-col justify-center">
      <Navbar />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Picker />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </main>
      <Add />
    </div>

  );
}

export default App;
