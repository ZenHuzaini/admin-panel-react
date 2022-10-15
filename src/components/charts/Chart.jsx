import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush } from 'recharts';
import './chart.scss'


const data = [];
for (let index = 0; index < 20; index++) {
  data.push({
    name: `D${index+1}`,
    uv: Math.floor(Math.random() * 9000),
    pv: Math.floor(Math.random() * 9000),
    amt: Math.floor(Math.random() * 9000),
  })
}


const Chart = ({aspect, title}) => {
  return (
    <div className='chart'>
      <div className="title">{title}</div>
      {/* we give it aspenct, it means if width is 100px, the height will bee half of it. if it the value is 100% it will be error */}
       <ResponsiveContainer width="100%" aspect={aspect}> 
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
          <Brush height={30} stroke="#8884d8"></Brush>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart