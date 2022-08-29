import "./App.css";
import React, { useEffect, useState } from "react";
import Tipbar from "./components/Tipbar";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Product from "./components/Product";

function App() {
  const [total, setTotal] = useState(0);

  useEffect(() => {}, [total]);
  return (
    <div className="App">
      <Tipbar />
      <Header total={total} />
      <Breadcrumbs />
      <Product total={total} setTotal={setTotal} />
      <Footer />
    </div>
  );
}

export default App;
