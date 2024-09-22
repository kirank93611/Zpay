//this is the code for the dashboard analytics page
import "./card.css"
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


const DashboardAnalytics=()=>{
  return (
    <div>
      {/* this is where the flex cards exist */}
    <div className="flex flex-row  p-6 gap-60">
     
        {/* Additional dashboard content can be placed here */}
        <div className="analytics-card flex justify-center space-betweenw-44 h-24">
          <div>
          <h2 className="bg-blend-color-dodge">Analytics Card</h2>
          </div>
        </div>

        <div className="analytics-card flex justify-center space-betweenw-44 h-24">
          <h2>No of Users</h2>
        </div>
      
    </div>
    <div className="flex flex-col  justify-start h-96">
      <Chart/>
       </div>
    </div>
  );
}



export function Chart() {
   const dataset = [
    { x: 1, y: 2 },
    { x: 2, y: 5.5 },
    { x: 3, y: 2 },
    { x: 5, y: 8.5 },
    { x: 8, y: 1.5 },
    { x: 10, y: 5 },
  ];
  
  return (
    <LineChart
      dataset={dataset}
      xAxis={[{ dataKey: 'x' }]}
      series={[{ dataKey: 'y' }]}
      height={300}
      width={900}
      margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
      grid={{ vertical: false, horizontal: true }}
    />
  );
}

export default DashboardAnalytics;