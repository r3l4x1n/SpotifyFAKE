import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Routes,Route, BrowserRouter} from "react-router-dom";

import "bootstrap"
import ManejoCanciones from "./pages/home/components/manejoCanciones/ManejoCanciones";
const router = createBrowserRouter([
  {
    path: "/prueba",
    element: <div>Hello world!</div>,
  },
]);

function App() {






  return (
    <>


    <BrowserRouter>

      <Header/>
      
        <Routes>


          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/manejo" element={<ManejoCanciones/>} /> */}
          <Route exact path="/manejo/:spotify" element={<ManejoCanciones/>} />

          {/* <RouterProvider router={router} /> */}
          {/* <Home/> */}
        </Routes>
      <Footer/>  

    </BrowserRouter>






    </>


  );
}

export default App;
