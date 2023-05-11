import styled from "styled-components"

export default function Match({data, matchNumber, compLevel, eventKey}) {

    function getMatchKey(){
        //Determine the key to use for this match based on comp level and match number
        var matchKey = eventKey + "_" + compLevel;
        if (compLevel == "f"){
            matchKey += "1m" + matchNumber;
        } else if (compLevel == "sf"){
            matchKey += matchNumber + "m1";
        } else if (compLevel == "qm"){
            matchKey += matchNumber;
        } else {
            return "Not Found";
        }
        return matchKey;
    }

    function getMatchData(){
        var matchData;
        //loop through and find the right match using match key
        for (var i = 0; i < data.length; i++){
            if (data[i].key == getMatchKey()){
                matchData = data[i];
                break;
            }
        }
        return matchData;
    }

//ok so what you used to have was grab the 2nd thing in the whole list of all matches. this no work
//what you need is to loop through and find the match with right match key. then grab that and use it

    function getTeamNumbers(color){
        var matchKey = getMatchKey();
        var matchData = getMatchData();
        var teamsList;

        // determine which color we want from parameter/prop idk
        if (color == "blue"){
            teamsList = matchData.alliances.blue.team_keys;
        } else {
            teamsList = matchData.alliances.red.team_keys;
        }
        var noExtraTextList = [];
        //for every element in the teams list
        for (var i = 0; i < teamsList.length; i++){
            var numOnly = teamsList[i].replace(/\D/g, "");
            noExtraTextList.push(numOnly);
        }
        var teamsList = "" + noExtraTextList[0] + ", " + noExtraTextList[1] + ", " + noExtraTextList[2];
        return teamsList;
    }

    function getTeamScore(color){
        if (color == "blue"){
            return getMatchData().alliances.blue.score;
        }
        return getMatchData().alliances.red.score;
    }

    return <Wrapper>
        <h1>
            {compLevel.toUpperCase()} {matchNumber}
        </h1>
        <BlueText>
            <p>Blue Teams: {getTeamNumbers("blue")}</p>
        </BlueText>
        <RedText>
            <p>Red Teams: {getTeamNumbers("red")}</p>
        </RedText>
        <p>Score: <span style={{color : 'blue'}}>{getTeamScore("blue")}</span> | <span style={{color : 'red'}}>{getTeamScore("red")}</span></p>
    </Wrapper>
}

const Wrapper = styled.div`
    background-color: aliceblue;
`

const BlueText = styled.div`
    color: blue;
`

const RedText = styled.div`
    color: red;
`