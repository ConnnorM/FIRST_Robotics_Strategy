import {useState} from "react"
import styled from "styled-components";
import SiteHeader from '../components/SiteHeader';

export default function bonus({data1, data2, data3, data4}){
    //UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the scheduled match time, 
    //as taken from the published schedule.
    var scheduledStartTimes = [];
    //UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of actual match start time.
    var actualStartTimes = [];
    //UNIX timestamp (seconds since 1-Jan-1970 00:00:00) of the TBA predicted 
    //match start time.
    var predictedStartTimes = [];
    //A list of each match's delay in seconds
    var delays = [];
    //A list of each match's delay due to slow loading onto the field
    var loadOnFieldDelays = [];
    //A list of all the teams in a slow loading match. Has duplicates
    var slowTeams = [];
    //A corresponding list of the times a team has been slow
    var slowTeamCounter = [];

    //fill each list with the 3 types of start times
    function populateStartTimes(data) {
        for (var i = 0; i < data.length; i++){
            scheduledStartTimes.push(data[i].time);
            actualStartTimes.push(data[i].actual_time);
            predictedStartTimes.push(data[i].predicted_time);
            delays.push(actualStartTimes[i] - scheduledStartTimes[i]);
            loadOnFieldDelays.push(actualStartTimes[i] - predictedStartTimes[i]);
        }
        DataCleaning();
    }

    function DataCleaning(){
        //Removing outliers that are clearly incorrect
        if (eventKey === "2023azgl"){
            actualStartTimes[2] = predictedStartTimes[2];
            delays[2] = 0;
        } 
        if (eventKey === "2023gal"){
            actualStartTimes[95] = predictedStartTimes[95];
            delays[95] = delays[94];
            actualStartTimes[96] = predictedStartTimes[96];
            delays[96] = delays[94];
            actualStartTimes[107] = predictedStartTimes[107];
            delays[107] = delays[106];
            actualStartTimes[125] = predictedStartTimes[125];
            delays[125] = delays[124];
        }
    }

    function PrintDelays(){
        console.log(eventName + ":");
        for (var i = 0; i < loadOnFieldDelays.length; i++){
            console.log("Match " + i + ": " + loadOnFieldDelays[i]);
        }
    }

    //use the actual start time and TBA's predicted start time to get the average match delay
    function calculateAverageMatchDelay() {
        var avgDelay = 0;
        for (var i = 0; i < delays.length; i++){
            avgDelay += delays[i];
        }
        avgDelay = avgDelay / delays.length;
        return avgDelay;
    }

    function getMaxMatchDelay() {
        var maxDelay = delays[0];
        for (var i = 1; i < delays.length; i++){
            if (delays[i] > maxDelay){
                maxDelay = delays[i];
            }
        }
        return maxDelay;
    }

    function getMinMatchDelay() {
        var minDelay = delays[0];
        for (var i = 1; i < delays.length; i++){
            if (delays[i] < minDelay){
                minDelay = delays[i];
            }
        }
        return minDelay;
    }

    function convertSecToHMS(sec){
        if (sec < 0){
            var negative = "-" + new Date(Math.abs(sec) * 1000).toISOString().slice(11, 19);
            return negative;
        }
        return new Date(sec * 1000).toISOString().slice(11, 19);
    }

    function determineSlowTeams(){
        for (var i = 0; i < loadOnFieldDelays.length; i++){
            if (loadOnFieldDelays[i] > 0) {
                // if the loading delay was greater than 0
                // get all the teams from that match
                var teamList = [
                    currData[i].alliances.red.team_keys[0],
                    currData[i].alliances.red.team_keys[1],
                    currData[i].alliances.red.team_keys[2],
                    currData[i].alliances.blue.team_keys[0],
                    currData[i].alliances.blue.team_keys[1],
                    currData[i].alliances.blue.team_keys[2]
                ];
                teamList.forEach(updateSlowTeam);
            }
        }
    }

    function updateSlowTeam(team){
        if (!slowTeams.includes(team)){
            // if that team isn't already a slow team
                slowTeams.push(team);
                slowTeamCounter.push(1);
            } else {
            // if that team is already a slow team
                for (var j = 0; j < slowTeams.length; j++){
                    if (slowTeams[j] === team){
                        slowTeamCounter[j] += 1;
                    }
                }
            }
    }

    function printSlowTeams(){
        console.log(eventName + ": ");
        for (var i = 0; i < slowTeams.length; i++){
            console.log(slowTeams[i] + ": " + slowTeamCounter[i]);
        }
    }

    function getSlowestTeam(){
        var slowest = 0;
        for (var i = 1; i < slowTeamCounter.length; i++){
            if (slowTeamCounter[i] > slowTeamCounter[slowest]) {
                slowest = i;
            }
        }
        return slowTeams[slowest].replace(/\D/g, "");
    }

    //changes the event to be displayed
    const [currData, setCurrData] = useState(data1);
    const [eventName, setEventName] = useState("Orange County Regional");
    const [eventKey, setEventKey] = useState('2023caoc');

    const changeToOC = (event) => {
        event.preventDefault();
        setEventName("Orange County Regional");
        setEventKey("2023caoc");
        setCurrData(data1);
    };
    
    const changeToLA = (event) => {
        event.preventDefault();
        setEventName("Los Angeles Regional");
        setEventKey("2023cala");
        setCurrData(data2);
    };
    
    const changeToAZWest = (event) => {
        event.preventDefault();
        setEventName("Arizona West Regional");
        setEventKey("2023azgl");
        setCurrData(data3);
    };

    const changeToGal = (event) => {
        event.preventDefault();
        setEventName("FIRST Championship Galileo Division");
        setEventKey("2023gal");
        setCurrData(data4);
    };

    return (
        <section>
            {populateStartTimes(currData)}
            {determineSlowTeams()}
            {/* {printSlowTeams()} */}
            {/* {PrintDelays()} */}
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

            <br/>

            <MessageSection>
                <h2>Showing stats for {eventName}:</h2>
            </MessageSection>

            <StatsSection>
                <p>Average Match Delay: {convertSecToHMS(calculateAverageMatchDelay())}</p>
                <p>Min Match Delay: {convertSecToHMS(getMinMatchDelay())}</p>
                <p>Max Match Delay: {convertSecToHMS(getMaxMatchDelay())}</p>
                <p>Slowest Team: {getSlowestTeam()}</p>
            </StatsSection>

            <Note>
                <b>NOTE:</b> Negative numbers mean that the event was <u>ahead</u> of schedule!
            </Note>

        </section>
    )
}

export async function getServerSideProps(context){
    const apiKey = process.env.apiKey;
    const eventKey1 = "2023caoc";
    const eventKey2 = "2023cala";
    const eventKey3 = "2023azgl";
    const eventKey4 = "2023gal";
    const url1 = `https://www.thebluealliance.com/api/v3/event/${eventKey1}/matches/simple`;
    const url2 = `https://www.thebluealliance.com/api/v3/event/${eventKey2}/matches/simple`;
    const url3 = `https://www.thebluealliance.com/api/v3/event/${eventKey3}/matches/simple`;
    const url4 = `https://www.thebluealliance.com/api/v3/event/${eventKey4}/matches/simple`;
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

    h2 {
        margin-top: 1vh;
        margin-bottom: 7.5vh;
    }
`
const StatsSection = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: auto;
    border: 3px solid black;
    border-radius: 10px;
    background-color: aliceblue;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 0;
    align-items: center;

    p {
        font-size: 1.5em;
    }
`

const Note = styled.h4`
    color: green;
    margin-top: 10vh;
    margin-left: 2vw;
`