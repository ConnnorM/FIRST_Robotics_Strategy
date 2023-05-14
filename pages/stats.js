import {useState} from "react"
import styled from "styled-components";
import SiteHeader from '../components/SiteHeader';
import TeamStats from '../components/TeamStats';

export default function stats({data1, data2, data3, data4}){
  //changes the event to be displayed
  const [currData, setCurrData] = useState(data1);
  const [eventName, setEventName] = useState("Orange County Regional");
  const [eventKey, setEventKey] = useState('2023caoc');

  const changeToOC = (event) => {
      event.preventDefault();
      setEventName("Orange County Regional");
      setEventKey("2023caoc");
      setTeamNumber('5199');
      setFormInput('');
      setMessage(`Stats for Team 5199:`);
      setCurrData(data1);
  };
  
  const changeToLA = (event) => {
      event.preventDefault();
      setEventName("Los Angeles Regional");
      setEventKey("2023cala");
      setTeamNumber('5199');
      setFormInput('');
      setMessage(`Stats for Team 5199:`);
      setCurrData(data2);
  };
  
  const changeToAZWest = (event) => {
      event.preventDefault();
      setEventName("Arizona West Regional");
      setEventKey("2023azgl");
      setTeamNumber('5199');
      setFormInput('');
      setMessage(`Stats for Team 5199:`);
      setCurrData(data3);
  };

  const changeToGal = (event) => {
      event.preventDefault();
      setEventName("FIRST Championship Galileo Division");
      setEventKey("2023gal");
      setTeamNumber('5199');
      setFormInput('');
      setMessage(`Stats for Team 5199:`);
      setCurrData(data4);
  };

  //useState changes for team number
  const [formInput, setFormInput] = useState('');
  const [teamNumber, setTeamNumber] = useState('5199');
  const [message, setMessage] = useState(`Stats for Team ${teamNumber}:`);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTeamNumber(formInput);
    setMessage(`Stats for Team ${formInput}:`);
  };

  function isInvalidTeam() {
    for (var i = 0; i < currData.length; i++){
        if (IsTeamOnBlueAlliance(currData[i]) || IsTeamOnRedAlliance(currData[i])){
            return false;
        }
    }
    return true;
  }

  //returns true/false if team is on the blue alliance
  function IsTeamOnBlueAlliance(match){
    var teamKey = "frc" + teamNumber;
    for (var j = 0; j < 3; j++){
        var team = match.alliances.blue.team_keys[j];
        if (team === teamKey){
            return true;
        }
    }
        return false;
  }

    //returns true/false if team is on the red alliance
    function IsTeamOnRedAlliance(match){
        var teamKey = "frc" + teamNumber;
        for (var j = 0; j < 3; j++){
            var team = match.alliances.red.team_keys[j];
            if (team === teamKey){
                return true;
            }
        }
        return false;
    }


    return (
        <section>
            {isInvalidTeam()}
            <SiteHeader/>

            <br/>

            <EventButtonsSection>
                <button 
                    onClick={changeToOC}
                    >Orange County
                </button>
                <button 
                    onClick={changeToLA}
                    >Los Angeles
                </button>
                <button 
                    onClick={changeToAZWest}
                    >Arizona West
                </button>
                <button
                    onClick={changeToGal}
                    >Galileo
                </button>
            </EventButtonsSection>

            <MessageSection>
                <h1> Viewing: {eventName}</h1>
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
                        >Show Stats
                    </button>
                </ButtonSection>
                <br />
                <br />
                </form>
            </FormSection>

            {/* check valid team number here */}
            {isInvalidTeam() ? (
                <InvalidWrapper>
                    <h1 id="teamNotFound">Team {teamNumber} was not at this event.</h1>
                </InvalidWrapper>
            ) : (
                <TeamStats allMatches={currData} teamNumber={teamNumber}/>
            )}

            <br/>

        </section>

    )
}

export async function getServerSideProps(context){
    const apiKey = process.env.apiKey;
    const eventKey1 = "2023caoc";
    const eventKey2 = "2023cala";
    const eventKey3 = "2023azgl";
    const eventKey4 = "2023gal";
    const url1 = `https://www.thebluealliance.com/api/v3/event/${eventKey1}/matches`;
    const url2 = `https://www.thebluealliance.com/api/v3/event/${eventKey2}/matches`;
    const url3 = `https://www.thebluealliance.com/api/v3/event/${eventKey3}/matches`;
    const url4 = `https://www.thebluealliance.com/api/v3/event/${eventKey4}/matches`;
    const response1 = await fetch(url1, { headers: { "X-TBA-Auth-Key": apiKey } });
    const response2 = await fetch(url2, { headers: { "X-TBA-Auth-Key": apiKey } });
    const response3 = await fetch(url3, { headers: { "X-TBA-Auth-Key": apiKey } });
    const response4 = await fetch(url4, { headers: { "X-TBA-Auth-Key": apiKey } });
    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();

    return {
        props: {data1: data1, data2: data2, data3: data3, data4: data4}
    }
}

const InvalidWrapper = styled.div`
    border: 3px solid gray;
    border-radius: 10px;
    margin-bottom: 2vh;
    background-color: aliceblue;
    font-size: 1.5em;
    margin-left: 2vw;
    margin-right: 2vw;
    
    #teamNotFound {
        margin-left: 1vw;
        color: red;
    }
`

const EventButtonsSection = styled.div`
    display: flex;
    margin-top: 2vh;
    margin-left: 1vw;
    margin-right: 2vw;
    
    button {
        margin-left: 1vw;
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

    @media (max-width: 540px){
        flex-wrap: wrap;
        justify-content: space-between;
        
        button {
            margin-bottom: 2vh;
        }
    }

    @media (max-width: 400px){
        button {
            font-size: 1.2em;
        }
    }

    @media (max-width: 300px){
        flex-direction: column;
    }
`

const MessageSection = styled.div`
    margin-left: 2vw;
`

const FormSection = styled.div`
    margin-left: 3vw;
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