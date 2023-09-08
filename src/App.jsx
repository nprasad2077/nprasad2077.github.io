import React from "react";
import { Analytics } from '@vercel/analytics/react';
// Components
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div class="">
      <Home />
      <Analytics />
    </div>
  );
};

export default App;
