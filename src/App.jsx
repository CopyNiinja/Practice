import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Add from "./Components/Add";
import Home from "./Components/Home";
import Layout from "./Components/Layout";

function App() {
  const [data, setData] = useState([
    {
      name: "Faiyaz",
      DOB: new Date("1999-02-20"),
      gender: "male",
      email: "qwertyfaiyaz@gmail.com",
      relationship: "family",
    },
    {
      name: "Faiyaz",
      DOB: new Date(),
      gender: "M",
      email: "qwertyfaiyaz@gmail.com",
      relationship: "family",
    },
    {
      name: "Syeda",
      DOB: new Date(),
      gender: "F",
      email: "killfyz0.o@gmail.com",
      relationship: "family",
    },
    {
      name: "Goku",
      DOB: new Date(),
      gender: "M",
      email: "goku0.o@gmail.com",
      relationship: "friend",
    },
  ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home data={data} />} />
        <Route path="add" element={<Add data={data} change={setData} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
