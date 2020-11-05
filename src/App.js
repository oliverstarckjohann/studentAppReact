import { useState } from "react";
import styled from "styled-components/macro";

import JournalForm from "./components/JournalForm";
import JournalList from "./components/JournalList";

function App() {
  const [journalentries, setJournalEntries] = useState([]);

  console.log(journalentries);

  function prepareJournalEntries(journalFormData) {
    const newJournalEntries = [...journalentries, journalFormData];
    setJournalEntries(newJournalEntries);
  }

  return (
    <div className="App">
      <h1>Student App</h1>
      <JournalForm onSubmit={prepareJournalEntries} />
      <JournalList entries={journalentries} />
    </div>
  );
}

export default App;
