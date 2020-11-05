import { useState } from "react";
import styled from "styled-components/macro";

// Hier übergebe ich den State über bei onFormSubmit an die App weiter
function JournalForm({ onSubmit }) {
  let getdate = new Date();
  let today =
    getdate.getDate() + "." + getdate.getMonth() + "." + getdate.getFullYear();

  const [journalform, setJournalForm] = useState({
    motto: "",
    notes: "",
    rating: "",
    comprehension: "",
  });

  function onFormSubmit(event) {
    event.preventDefault();
    // Hier gebe ich den State an onSubmit
    onSubmit(journalform);
  }

  function inputchange(event) {
    const newentry = {
      ...journalform,
      [event.target.name]: event.target.value,
    };
    setJournalForm(newentry);
  }

  function inputVoting(event) {
    const newentry = {
      ...journalform,
      [event.target.name]: event.target.value,
    };
    setJournalForm(newentry);
  }

  return (
    <>
      <div>
        <p>TODAY, {today}</p>
        <div>
          <form onSubmit={onFormSubmit}>
            <div>
              RATING:
              <input
                type="radio"
                name="rating"
                id="1"
                value="1"
                onChange={inputchange}
              />
              <input
                type="radio"
                name="rating"
                id="2"
                value="2"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="rating"
                id="3"
                value="3"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="rating"
                id="4"
                value="4"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="rating"
                id="5"
                value="5"
                onChange={inputVoting}
              />
            </div>
            <div>
              COMPREHENSION:
              <input
                type="radio"
                name="comprehension"
                value="1"
                id="1"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="2"
                id="2"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="3"
                id="3"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="4"
                id="4"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="5"
                id="5"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="6"
                id="6"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="7"
                id="7"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="8"
                id="8"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="9"
                id="9"
                onChange={inputVoting}
              />
              <input
                type="radio"
                name="comprehension"
                value="10"
                id="10"
                onChange={inputVoting}
              />
            </div>
            <label>Motto:</label>
            <input
              type="text"
              name="motto"
              value={journalform.motto}
              onChange={inputchange}
            />
            <label>Notes:</label>
            <input
              type="text"
              name="notes"
              value={journalform.notes}
              onChange={inputchange}
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default JournalForm;
