import { KeyboardArrowDown, KeyboardArrowUp, MoreVertOutlined } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "./featured.scss"
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className="title">Total Revenue</h1>
        <MoreVertOutlined fontSize='small' />
      </div>
      <div className="bottom">
        <div className="featuredBar">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={2} />
        </div>
        <p className="titl">Total Sales Made Today</p>
        <p className="amount">$420</p>
        <p className="desc">
          lorem something
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUp/>
              <div className="resultAmount">$12.4</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDown/>
              <div className="resultAmount">$12.4</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDown/>
              <div className="resultAmount">$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured