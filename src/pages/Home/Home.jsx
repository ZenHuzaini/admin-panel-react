import React from "react";
import Chart from "../../components/charts/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Widget from "../../components/Widget/Widget";
import EnhancedTableHead from "../../components/Table/Table";

import "./home.scss";

const widgetType = ["user", "order", "earning", "balance"];

const Home = () => {
	return (
		<div className="home">
			<Sidebar></Sidebar>
			<div className="homeContainer">
				<Navbar />
				<div className="widgets">
					<Widget type={widgetType[0]}></Widget>
					<Widget type={widgetType[1]}></Widget>
					<Widget type={widgetType[2]}></Widget>
					<Widget type={widgetType[3]}></Widget>
				</div>

				<div className="chartsData">
					<Featured />
					<Chart />
				</div>

				<div className="listContainer">
					<div className="listTitle">Latest Component</div>
					<EnhancedTableHead></EnhancedTableHead>
				</div>
			</div>
		</div>
	);
};

export default Home;
