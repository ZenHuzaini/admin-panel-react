import React from 'react'
import DataTable from '../../components/datatable/DataTable'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./list.scss"

const List = () => {
  return (
    <div className='list'>
      <Sidebar></Sidebar>
      <div className="listContainer">
        <Navbar></Navbar>
        <DataTable></DataTable>
      </div>
    </div>
  )
}

export default List