import { useState } from "react";
import Navbar from "./components/Navbar";
import Iphone14pro from "./components/iPhone14pro";
import Iphone14 from "./components/iPhone14";
import Unity from "./components/Unity";
import SmallProduct from "./components/SmallProducts";

function App() {
  return (
    <div>
      <Navbar />
      <Iphone14pro />
      <Iphone14 />
      <Unity />
      <SmallProduct />
    </div>
  );
}

export default App;
