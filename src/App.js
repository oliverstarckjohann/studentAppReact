import { useState } from "react";
import styled from "styled-components/macro";

import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

function App() {
  return (
    <div className="App">
      <h1>Student App</h1>
      <JournalForm />
      <JournalList />
    </div>
  );
}

export default App;
