import {useState} from "react"
import styled from "styled-components"

export default function TeamNumberInput(){
  const [teamNumber, setTeamNumber] = useState('5199');
  const [message, setMessage] = useState(`Showing matches for Team ${teamNumber}:`);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Showing matches for Team ${teamNumber}:`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="Team Number"
        name="Team Number"
        value={teamNumber}
        placeholder="Team Number"
        onChange={(event) =>
          setTeamNumber(event.target.value)
        }
      />

      <br />
      <br />

      <button type="submit">Show Matches</button>

      <br />

      <h2>{message}</h2>
    </form>
  );
}