# CPSC458 Final Project
README Final Project - FIRST Robotics Strategy Site

Link to Deployed Netlify Site: https://frcteam5199strategy.netlify.app/

This website serves as a strategy hub for my FIRST Robotics team. The site accesses the offical API of the event that a team is playing at and displays statistics and information. You can filter based on the events that my team is competing at as well as the other teams at the currently selected event.

1.  Connor Martindale
     002408897
     martindale@chapman.edu
     CPSC 458
     Final Project

2. Notes: When switching between the Matches, Stats, and Bonus tab, the site sometimes takes a long time to load (a couple of seconds). This is because I am loading 4 events worth of information on each page. In future versions, each of these pages will only have 1 event and I will make more pages to accomodate the extreme load on visiting a page.

3. References: 
- For the sortAndCleanSlowTeams function, I found a similar function online and tweaked that because I was struggling to get the mapping function to work the way I wanted it to. I take no credit for the actual outline of that function, I merely changed it to match my purposes.

4. Data:
- The data for this site comes from The Blue Alliance's public API.
- Here is an example of what the API provides for one event:
-  https://www.thebluealliance.com/api/v3/event/2023caoc/matches
-  API Documentation:
-  https://frc-api-docs.firstinspires.org/#58da7b76-4b47-4ee3-903d-1571897e0a09
