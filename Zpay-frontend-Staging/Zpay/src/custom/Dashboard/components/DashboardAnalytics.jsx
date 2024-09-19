//this is the code for the dashboard analytics page
import "./card.css"
import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';
const DashboardAnalytics=()=>{
  return (
    <div>
      {/* this is where the flex cards exist */}
    <div className="flex flex-row  p-6 gap-60">
     
        {/* Additional dashboard content can be placed here */}
        <div className="analytics-card">
          <h2>Analytics Card</h2>
        </div>
        <div className="analytics-card">
          <h2>No of Users</h2>
        </div>
      
    </div>
    <div className="flex flex-col justify-start h-96">
       <BasicLineChart />
       </div>
    </div>
  );
}

export function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}

export default DashboardAnalytics;