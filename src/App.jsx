import Add from "./components/Add";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Picker from "./components/Piccker";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGroupContext } from "./hooks/useGroupsContext";
import { useEffect } from "react";
function App() {
  const { groups, dispatch } = useGroupContext();

  // useEffect(() => {
  //   if (localStorage.getItem("groups")) {
  //     const getGroups = JSON.parse(localStorage.getItem("groups"));

  //     dispatch({
  //       type: "SET_GROUPS",
  //       payload: getGroups,
  //     });

  //     console.log(getGroups);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <div className="App flex h-screen w-screen flex-col justify-center">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Picker />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </main>
      </div>
      <Add />
    </BrowserRouter>
  );
}

export default App;
