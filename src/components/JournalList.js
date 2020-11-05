import { useState } from "react";
import styled from "styled-components/macro";

// Hier hole ich mir die Daten aus dem State der App als Array in meine Liste
// Im Return Teil der Funktion greife ich auf die Keys der Objekte über ein ...map
// zu ...map erzeugt mir ein Array mit jeweils einem entry für jeden Eintrag (jedes Objekt), der
// über das JournalForm eingegeben wurde.

function JournalList({ entries }) {
  console.log(entries);
  return (
    <>
      {entries.map((entry) => (
        <div>Motto: {entry.motto}</div>
      ))}
    </>
  );
}

export default JournalList;
