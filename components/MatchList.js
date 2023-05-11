import styled from "styled-components"
import MatchTry2 from "./MatchTry2"

//takes in all the Matches
export default function MatchList({ allMatches, teamNumber, eventKey }) {

//Get all of the matches for a team, pass in qm, sf, f to get that match type
function GetAllMatchesForTeamByType(matchType){
    var MatchListForTeamByType = [];
        for (var i = 0; i < allMatches.length; i++){
            //first, check if this match is the right match type
            if (allMatches[i].comp_level === matchType){
                //second, if it's the right match type, is the given team on either alliance?
                if (IsTeamOnBlueAlliance(allMatches[i]) || IsTeamOnRedAlliance(allMatches[i])){
                    //third, if the team is on the alliance, add that match to the list
                    MatchListForTeamByType.push(allMatches[i]);
                }
            }
        }
    return MatchListForTeamByType;
}

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

    return <Wrapper>
        {/* 3 objects here: 1 for each comp level in order */}
        {/* For quals */}
        { GetAllMatchesForTeamByType("qm").map(m => <MatchTry2 
                key="quals"
                compLevel={"qm"} 
                matchNumber={m.match_number} 
                setNumber={m.set_number}
                redScore={m.alliances.red.score}
                blueScore={m.alliances.blue.score}
                r1={m.alliances.red.team_keys[0]}
                r2={m.alliances.red.team_keys[1]}
                r3={m.alliances.red.team_keys[2]}
                b1={m.alliances.blue.team_keys[0]}
                b2={m.alliances.blue.team_keys[1]}
                b3={m.alliances.blue.team_keys[2]}/>)
        }

        {/* For semis */}
        { GetAllMatchesForTeamByType("sf").map(m => <MatchTry2 
                key="playoffs"
                compLevel={"sf"} 
                matchNumber={m.match_number} 
                setNumber={m.set_number}
                redScore={m.alliances.red.score}
                blueScore={m.alliances.blue.score}
                r1={m.alliances.red.team_keys[0]}
                r2={m.alliances.red.team_keys[1]}
                r3={m.alliances.red.team_keys[2]}
                b1={m.alliances.blue.team_keys[0]}
                b2={m.alliances.blue.team_keys[1]}
                b3={m.alliances.blue.team_keys[2]}/>)
        }

        {/* For final */}
        { GetAllMatchesForTeamByType("f").map(m => <MatchTry2 
                key="finals"
                compLevel={"f"} 
                matchNumber={m.match_number} 
                setNumber={m.set_number}
                redScore={m.alliances.red.score}
                blueScore={m.alliances.blue.score}
                r1={m.alliances.red.team_keys[0]}
                r2={m.alliances.red.team_keys[1]}
                r3={m.alliances.red.team_keys[2]}
                b1={m.alliances.blue.team_keys[0]}
                b2={m.alliances.blue.team_keys[1]}
                b3={m.alliances.blue.team_keys[2]}/>)
        }
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
`