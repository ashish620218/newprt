import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-amber-100 min-h-screen px-6 py-3 flex flex-col gap-16">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

export default App;
