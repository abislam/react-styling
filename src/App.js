import React from 'react';
import './App.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";

function App() {
  return (
    <div className="App">
      <Rectangle/>
      <Rectangle/>
      <Rectangle/>

      <Block borderColor={"Orange"} backgroundColor={"Black"}/>
      <Block borderColor={"Green"} backgroundColor={"White"}/>
      <Block borderColor={"Yellow"} backgroundColor={"Red"}/>

    </div>
  );
}

export default App;
