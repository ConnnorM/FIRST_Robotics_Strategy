import {useState} from "react"
import styled from "styled-components";

export default function TeamStats({allMatches, teamNumber}) {
      //Controls something idk what yet
    //   const [currData, setCurrData] = useState(data1);
    //   const changeToOC = (event) => {
    //     event.preventDefault();
    //     setEventName("Orange County Regional");
    //     setEventKey("2023caoc");
    //     setCurrData(data1);
    // };

      //Stores all the matches for the current team
      var currTeamMatches = [];

      //EVENT AVERAGES
      //Sorry I was too lazy to learn how dictionaries work when I did this
      var avgAutoGamePiecePts = 0;
      var avgAutoGamePieceCount = 0;
      var avgAutoPoints = 0;
      var avgEndGameChargeStationPoints = 0;
      var avgFoulPoints = 0;
      var avgLinkPoints = 0;
      var avgTeleopGamePieceCount = 0;
      var avgTeleopGamePiecePoints = 0;
      var avgTotalPoints = 0;

      //TEAM'S AVERAGE
      //I was less lazy today. Dictionaries are dope
      var teamAverages = {
        avgAutoGamePiecePoints: 0,
        avgAutoGamePieceCount: 0,
        avgAutoPoints: 0,
        avgEndGameChargeStationPoints: 0,
        avgFoulPoints: 0,
        avgLinkPoints: 0,
        avgTeleopGamePieceCount: 0,
        avgTeleopGamePiecePoints: 0,
        avgTotalPoints: 0
      };

      function isInvalidTeam() {
        if (currTeamMatches.length === 0){
            return true;
        }
        return false;
      }

      //Functions for calculating stats
      //Updates currData to only match the given team number
      function getAllMatchesForTeam(){
        for (var i = 0; i < allMatches.length; i++){
            if (IsTeamOnBlueAlliance(allMatches[i]) || IsTeamOnRedAlliance(allMatches[i])){
                currTeamMatches.push(allMatches[i]);
            }
        }
      }

      //Calculates the averages for the current event 
      function calcEventAverages() {
        for (var i = 0; i < allMatches.length; i++){
            //Auto game pieces
            avgAutoGamePieceCount += allMatches[i].score_breakdown.red.autoGamePieceCount;
            avgAutoGamePieceCount += allMatches[i].score_breakdown.blue.autoGamePieceCount;
            //Auto game piece pts
            avgAutoGamePiecePts += allMatches[i].score_breakdown.red.autoGamePiecePoints;
            avgAutoGamePiecePts += allMatches[i].score_breakdown.blue.autoGamePiecePoints;
            //Auto points
            avgAutoPoints += allMatches[i].score_breakdown.red.autoPoints;
            avgAutoPoints += allMatches[i].score_breakdown.blue.autoPoints;
            //End Game Charge Station Points
            avgEndGameChargeStationPoints += allMatches[i].score_breakdown.red.endGameChargeStationPoints;
            avgEndGameChargeStationPoints += allMatches[i].score_breakdown.blue.endGameChargeStationPoints;
            //Foul Points
            avgFoulPoints += allMatches[i].score_breakdown.red.foulPoints;
            avgFoulPoints += allMatches[i].score_breakdown.blue.foulPoints;
            //Link Points
            avgLinkPoints += allMatches[i].score_breakdown.red.linkPoints;
            avgLinkPoints += allMatches[i].score_breakdown.blue.linkPoints;
            //Teleop Game Piece Count
            avgTeleopGamePieceCount += allMatches[i].score_breakdown.red.teleopGamePieceCount;
            avgTeleopGamePieceCount += allMatches[i].score_breakdown.blue.teleopGamePieceCount;
            //Teleop Game Piece Points
            avgTeleopGamePiecePoints += allMatches[i].score_breakdown.red.teleopGamePiecePoints;
            avgTeleopGamePiecePoints += allMatches[i].score_breakdown.blue.teleopGamePiecePoints;
            //Total Points
            avgTotalPoints += allMatches[i].score_breakdown.red.totalPoints;
            avgTotalPoints += allMatches[i].score_breakdown.blue.totalPoints;

        }
        //Convert totals to average
        avgAutoGamePieceCount = RoundNumberTwoPlaces(avgAutoGamePieceCount / (allMatches.length * 2));
        avgAutoGamePiecePts = RoundNumberTwoPlaces(avgAutoGamePiecePts / (allMatches.length * 2));
        avgAutoPoints = RoundNumberTwoPlaces(avgAutoPoints / (allMatches.length * 2));
        avgEndGameChargeStationPoints = RoundNumberTwoPlaces(avgEndGameChargeStationPoints / (allMatches.length * 2));
        avgFoulPoints = RoundNumberTwoPlaces(avgFoulPoints / (allMatches.length * 2));
        avgLinkPoints = RoundNumberTwoPlaces(avgLinkPoints / (allMatches.length * 2));
        avgTeleopGamePieceCount = RoundNumberTwoPlaces(avgTeleopGamePieceCount / (allMatches.length * 2));
        avgTeleopGamePiecePoints = RoundNumberTwoPlaces(avgTeleopGamePiecePoints / (allMatches.length * 2));
        avgTotalPoints = RoundNumberTwoPlaces(avgTotalPoints / (allMatches.length * 2));
      }

      //Calculates the averages for the current team
      function calcTeamAverages(){
        for (var i = 0; i < currTeamMatches.length; i++){
            //Auto game pieces
            teamAverages.avgAutoGamePieceCount += (currTeamMatches[i].score_breakdown.red.autoGamePieceCount
                + currTeamMatches[i].score_breakdown.blue.autoGamePieceCount);
            //Auto game piece points
            teamAverages.avgAutoGamePiecePoints += (currTeamMatches[i].score_breakdown.red.autoGamePiecePoints
                + currTeamMatches[i].score_breakdown.blue.autoGamePiecePoints);
            //Auto points
            teamAverages.avgAutoPoints += (currTeamMatches[i].score_breakdown.red.autoPoints
                + currTeamMatches[i].score_breakdown.blue.autoPoints);
            //End Game Charge Station Points
            teamAverages.avgEndGameChargeStationPoints += (currTeamMatches[i].score_breakdown.red.endGameChargeStationPoints
                + currTeamMatches[i].score_breakdown.blue.endGameChargeStationPoints);
            //Foul Points
            teamAverages.avgFoulPoints += (currTeamMatches[i].score_breakdown.red.foulPoints
                + currTeamMatches[i].score_breakdown.blue.foulPoints);
            //Link Points
            teamAverages.avgLinkPoints += (currTeamMatches[i].score_breakdown.red.linkPoints
                + currTeamMatches[i].score_breakdown.blue.linkPoints);
            //Teleop Game Piece Count
            teamAverages.avgTeleopGamePieceCount += (currTeamMatches[i].score_breakdown.red.teleopGamePieceCount
                + currTeamMatches[i].score_breakdown.blue.teleopGamePieceCount);
            //Teleop Game Piece Points
            teamAverages.avgTeleopGamePiecePoints += (currTeamMatches[i].score_breakdown.red.teleopGamePiecePoints
                + currTeamMatches[i].score_breakdown.blue.teleopGamePiecePoints);
            //Total Points
            teamAverages.avgTotalPoints += (currTeamMatches[i].score_breakdown.red.totalPoints
                + currTeamMatches[i].score_breakdown.blue.totalPoints);
        }
        //Convert team totals to average
        teamAverages.avgAutoGamePieceCount = RoundNumberTwoPlaces(teamAverages.avgAutoGamePieceCount / (currTeamMatches.length * 2));
        teamAverages.avgAutoGamePiecePoints = RoundNumberTwoPlaces(teamAverages.avgAutoGamePiecePoints / (currTeamMatches.length * 2));
        teamAverages.avgAutoPoints = RoundNumberTwoPlaces(teamAverages.avgAutoPoints / (currTeamMatches.length * 2));
        teamAverages.avgEndGameChargeStationPoints = RoundNumberTwoPlaces(teamAverages.avgEndGameChargeStationPoints / (currTeamMatches.length * 2));
        teamAverages.avgFoulPoints = RoundNumberTwoPlaces(teamAverages.avgFoulPoints / (currTeamMatches.length * 2));
        teamAverages.avgLinkPoints = RoundNumberTwoPlaces(teamAverages.avgLinkPoints / (currTeamMatches.length * 2));
        teamAverages.avgTeleopGamePieceCount = RoundNumberTwoPlaces(teamAverages.avgTeleopGamePieceCount / (currTeamMatches.length * 2));
        teamAverages.avgTeleopGamePiecePoints = RoundNumberTwoPlaces(teamAverages.avgTeleopGamePiecePoints / (currTeamMatches.length * 2));
        teamAverages.avgTotalPoints = RoundNumberTwoPlaces(teamAverages.avgTotalPoints / (currTeamMatches.length * 2));
      }

      function RoundNumberTwoPlaces(num){
        return Math.round((num + Number.EPSILON) * 100) / 100;
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

    return <Wrapper>
        {getAllMatchesForTeam()}
        {calcEventAverages()}
        {calcTeamAverages()}

        <StatWrapper>
            <h2>Metric</h2>
            <h2>Team Avg.</h2>
            <h2>Event Avg.</h2>
        </StatWrapper>

        <StatWrapper>
            <h2><u>Auton:</u></h2>
        </StatWrapper>

        <StatWrapper>
            <h4>Game Piece Count:</h4>
            <p>{teamAverages.avgAutoGamePieceCount}</p>
            <p>{avgAutoGamePieceCount}</p>
        </StatWrapper>

        <StatWrapper>
            <h4>Game Piece Points:</h4>
            <p>{teamAverages.avgAutoGamePiecePoints}</p>
            <p>{avgAutoGamePiecePts}</p>
        </StatWrapper>

        <StatWrapper>
            <h4>Total Points:</h4>
            <p>{teamAverages.avgAutoPoints}</p>
            <p>{avgAutoPoints}</p>
        </StatWrapper>

        <StatWrapper>
            <h2><u>Teleop:</u></h2>
        </StatWrapper>

        <StatWrapper>
            <h4>Game Piece Count:</h4>
            <p>{teamAverages.avgTeleopGamePieceCount}</p>
            <p>{avgTeleopGamePieceCount}</p>
        </StatWrapper>

        <StatWrapper>
            <h4>Game Piece Points:</h4>
            <p>{teamAverages.avgTeleopGamePiecePoints}</p>
            <p>{avgTeleopGamePiecePoints}</p>
        </StatWrapper>

        <StatWrapper>
            <h4>Link Points:</h4>
            <p>{teamAverages.avgLinkPoints}</p>
            <p>{avgLinkPoints}</p>
        </StatWrapper>

        <StatWrapper>
            <h2><u>Misc:</u></h2>
        </StatWrapper>

        <StatWrapper>
            <h4>Charge Station Points:</h4>
            <p>{teamAverages.avgEndGameChargeStationPoints}</p>
            <p>{avgEndGameChargeStationPoints}</p>
        </StatWrapper>

        <StatWrapper>
            <h4>Foul Points:</h4>
            <p>{teamAverages.avgFoulPoints}</p>
            <p>{avgFoulPoints}</p>
        </StatWrapper>

        <StatWrapper>
            <h4>Total Points:</h4>
            <p>{teamAverages.avgTotalPoints}</p>
            <p>{avgTotalPoints}</p>
        </StatWrapper>
    </Wrapper>
}

const StatWrapper = styled.div`
    margin-left: 2vw;
    margin-right: 2vw;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1.5fr 1fr 1fr;
    justify-items: start;
    align-items: center;

    @media (max-width: 350px){
        h2 {
            font-size: 1em;
        }
    }
`

const Wrapper = styled.div`
    border: 3px solid gray;
    border-radius: 10px;
    margin-bottom: 2vh;
    background-color: aliceblue;
    font-size: 1.5em;
    margin-left: 2vw;
    margin-right: 2vw;

    h1 {
        margin-left: 2vw;
    }

    h3 {
        margin-left: 2vw;
    }

    #teamNotFound {
        color: red;
    }

    p {
        margin-left: 4vw;
    }
`