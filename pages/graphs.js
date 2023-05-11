import {useState} from "react"
import SiteHeader from '../components/SiteHeader';
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

export default function graphs({data, eventKey}){

    const ctx = document.getElementById('myChart');
    const chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          onClick: (e) => {
            const canvasPosition = getRelativePosition(e, chart);
      
            // Substitute the appropriate scale IDs
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
          }
        }
      });


    return (
        <section>
            <h1>
                GRAPHS
            </h1>
            {chart}
        </section>
    )
}

export async function getServerSideProps(context){
    const apiKey = process.env.apiKey;
    const eventKey = "2023azgl";
    const url = `https://www.thebluealliance.com/api/v3/event/${eventKey}/matches`;
    const response = await fetch(url, { headers: { "X-TBA-Auth-Key": apiKey } });
    const data = await response.json();

    return {
        props: {data: data, eventKey: eventKey}
    }
}