import {useState} from "react"
import styled from "styled-components";
import SiteHeader from '../components/SiteHeader';

export default function bonus({data}){
    //for testing individual matches
    const matchNum = 2;

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

    //fill each list with the 3 types of start times
    function populateStartTimes() {
        for (var i = 0; i < data.length; i++){
            scheduledStartTimes.push(data[i].time);
            actualStartTimes.push(data[i].actual_time);
            predictedStartTimes.push(data[i].predicted_time);
            delays.push(actualStartTimes[i] - scheduledStartTimes[i]);
        }
        DataCleaning();
    }

    function DataCleaning(){
        //Fixing the bad data
        if (eventKey === "2023azgl"){
            actualStartTimes[2] = predictedStartTimes[2];
            delays[2] = actualStartTimes[2] - predictedStartTimes[2];
        }
    }

    function PrintDelays(){
        for (var i = 0; i < delays.length; i++){
            console.log("Match " + i + ": " + delays[i]);
        }
    }

    function getTimeFromUnix(time){
        var date = new Date(time * 1000);
        var timeFormat = date.toLocaleTimeString("en-US");
        return timeFormat;
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

    //
    const [formInput, setFormInput] = useState('');
    const [eventKey, setEventKey] = useState('2023azgl');
    const [message, setMessage] = useState(`Showing stats for ${eventKey}:`);

    const handleSubmit = (event) => {
    event.preventDefault();
    setEventKey(formInput);
    setMessage(`Showing stats for ${formInput}:`);
  };

    return (
        <section>
            {populateStartTimes()}
            <SiteHeader/>
            {/* ------------------------------------------------------------------------ */}
            <MessageSection>
                <h2>{message}</h2>
            </MessageSection>
            <FormSection>
                <form id="EventKeyForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    // size="13"
                    style={{width: "13ch",
                            fontSize: "1.5em"}}
                    id="Event Key"
                    name="Event Key"
                    value={formInput}
                    placeholder="    Event Key"
                    onChange={(event) =>
                    setFormInput(event.target.value)
                    }
                />
                <br />
                <br />
                <button 
                    type="submit"
                    style={{fontSize: "1.5em"}}
                    >Change Event</button>
                <br />
                <br />
                </form>
            </FormSection>
            {/* ------------------------------------------------------------------------ */}


            <p>Event Key: {eventKey}</p>
            <p>Match Index: {matchNum}</p>
            <p>Average Match Delay: {convertSecToHMS(calculateAverageMatchDelay())}</p>
            <p>Min Match Delay: {convertSecToHMS(getMinMatchDelay())}</p>
            <p>Max Match Delay: {convertSecToHMS(getMaxMatchDelay())}</p>
            <p suppressHydrationWarning>Actual Time: {getTimeFromUnix(actualStartTimes[matchNum])}</p>
            <p suppressHydrationWarning>Predicted Time: {getTimeFromUnix(predictedStartTimes[matchNum])}</p>
            <p suppressHydrationWarning>Scheduled Time: {getTimeFromUnix(scheduledStartTimes[matchNum])}</p>

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