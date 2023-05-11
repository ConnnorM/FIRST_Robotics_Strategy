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
                <button 
                    type="submit"
                    style={{fontSize: "1.5em"}}
                    >Show Matches</button>
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