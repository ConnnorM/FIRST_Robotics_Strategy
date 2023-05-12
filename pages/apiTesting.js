//Testing reading and displaying the TBA API information

import {useState} from "react"
import styled from "styled-components";
import SiteHeader from '../components/SiteHeader';
import MatchList from '../components/MatchList';

export default function apiTesting({data, eventKey}) {
  const [formInput, setFormInput] = useState('');
  const [teamNumber, setTeamNumber] = useState('5199');
  const [message, setMessage] = useState(`Matches for Team ${teamNumber}:`);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTeamNumber(formInput);
    setMessage(`Matches for Team ${formInput}:`);
  };

    return (
        <section>
            <SiteHeader/>
            <MessageSection>
                <h2>{message}</h2>
            </MessageSection>
            <FormSection>
                <form id="TeamNumberForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    // size="13"
                    style={{width: "13ch",
                            fontSize: "1.5em"}}
                    id="Team Number"
                    name="Team Number"
                    value={formInput}
                    placeholder=" Team Number"
                    onChange={(event) =>
                    setFormInput(event.target.value)
                    }
                />
                <br />
                <br />
                <ButtonSection>
                    <button 
                        type="submit"
                        style={{fontSize: "1.5em"}}
                        >Show Matches
                    </button>
                </ButtonSection>
                <br />
                <br />
                </form>
            </FormSection>
            <MatchSection>
                <MatchList allMatches={data} teamNumber={teamNumber} eventKey={eventKey}/>
            </MatchSection>
        </section>
        
    )
}

export async function getServerSideProps(context){
    const apiKey = process.env.apiKey;
    const eventKey = "2023azgl";
    const url = `https://www.thebluealliance.com/api/v3/event/${eventKey}/matches/simple`;
    const response = await fetch(url, { headers: { "X-TBA-Auth-Key": apiKey } });
    const data = await response.json();

    return {
        props: {data: data, eventKey: eventKey}
    }
}

const MessageSection = styled.div`
    margin-left: 2vw;
`

const FormSection = styled.div`
    margin-left: 3vw;
`

const MatchSection = styled.div`
    display: grid;
    margin-left: 10vw;
    margin-right: 10vw;
`

const ButtonSection = styled.div`
    button {
        color: white;
        background-color: blue;
        font-weight: bold;
        font-size: 1.5em;
        border: 2px solid gray;
    }

    button:hover {
        background-color: white;
        color: blue;
        box-shadow: 0 5px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
        cursor: pointer;
    }

    button:focus-visible {
        outline: 2.5px solid red;
    }
`