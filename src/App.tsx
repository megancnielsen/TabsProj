import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Box from "./components/Content";

const App = () => {
  const [tabSelected, setTab] = React.useState<number>(0);
  const textArray: string[]=["Tab1Content", "Tab2Content", "Tab3Content"];
  const TabChange = (intValue: number) => {
    setTab(intValue)
  }
  return (
    <div className="App container">
      <Tabs onClick={() => TabChange(0)} label="Tab1"/>
      <Tabs onClick={() => TabChange(1)} label="Tab2"/>
      <Tabs onClick={() => TabChange(2)} label="Tab3"/>
      <Box content={textArray[tabSelected]}/>
    </div>
  );
}

export default App;