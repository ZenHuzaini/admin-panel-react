import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.scss'


const data = [];
for (let index = 0; index < 100; index++) {
  data.push({
    name: `D${index+1}`,
    uv: Math.floor(Math.random() * 9000),
    pv: Math.floor(Math.random() * 9000),
    amt: Math.floor(Math.random() * 9000),
  })
}


const Chart = () => {
  return (
    <div className='chart'>
      <div className="title">Money Spent</div>
      {/* we give it aspenct, it means if width is 100px, the height will bee half of it. if it the value is 100% it will be error */}
       <ResponsiveContainer width="100%" aspect={2/1}> 
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart