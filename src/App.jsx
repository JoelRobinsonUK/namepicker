import Add from "./components/Add";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Picker from "./components/Piccker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen w-screen flex flex-col justify-center">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Picker/>} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
      </div>
      <Add/>
    </BrowserRouter>
  );
}

export default App;
