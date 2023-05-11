import styled from "styled-components"

//What do I want to pass into Match:
//- one match's info at a time
//- match list handles getting a list of only the matches for that team by category
//and it will pass in just a list of matches here
//- this component's job is to take in ALL the info regarding a match and print it out nicely
//- so we want to give it:
//  - comp level
//  - match number
//  - set number
//  - red alliance teams
//  - red alliance score
//  - blue alliance teams
//  - blue alliance score
//  - whatever else I want later, just add props

export default function MatchTry2({compLevel, matchNumber, setNumber, redScore, blueScore, r1, r2, r3, b1, b2, b3}) {
    function isSemiFinals(){
        return compLevel === "sf";
    }

    function GetTeamNumberFromTeamKey(teamKey){
        return teamKey.replace(/\D/g, "");
    }

    return <Wrapper>
        <div>
            {
                isSemiFinals() ? (
                    <h1>{compLevel.toUpperCase()}-{setNumber}</h1>
                ) : (
                    <h1>{compLevel.toUpperCase()}-{matchNumber}</h1>
                )
            }
        </div>
        <BlueText>
            <p>Blue Alliance:<br/>{GetTeamNumberFromTeamKey(b1)}, {GetTeamNumberFromTeamKey(b2)}, {GetTeamNumberFromTeamKey(b3)}</p>
        </BlueText>
        <RedText>
            <p>Red Alliance:<br/>{GetTeamNumberFromTeamKey(r1)}, {GetTeamNumberFromTeamKey(r2)}, {GetTeamNumberFromTeamKey(r3)}</p>
        </RedText>
        <p>Score: <span style={{color : 'blue'}}>{blueScore}</span> | <span style={{color : 'red'}}>{redScore}</span></p>
        
    </Wrapper>
}

const Wrapper = styled.div`
    border: 3px solid gray;
    border-radius: 10px;
    margin-bottom: 2vh;
    background-color: aliceblue;
    font-size: 1.5em;

    h1 {
        margin-left: 2vw;
    }

    p {
        margin-left: 4vw;
    }
`

const BlueText = styled.div`
    color: blue;
`

const RedText = styled.div`
    color: red;
`