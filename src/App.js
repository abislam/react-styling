import React from 'react';
import './App.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";
import Block2 from "./components/Block2";

function App() {
  return (
    <div className="App">
      <Rectangle/>
      <Rectangle/>
      <Rectangle/>
      <br/>
      <Block borderColor={"Orange"} backgroundColor={"Black"}/>
      <Block borderColor={"Green"} backgroundColor={"White"}/>
      <Block borderColor={"Yellow"} backgroundColor={"Red"}/>
      <br/>
      <Block2/>
      <Block2/>
      <Block2/>
    </div>
  );
}

export default App;
