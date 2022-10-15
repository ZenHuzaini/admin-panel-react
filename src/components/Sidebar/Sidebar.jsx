import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./sidebar.scss";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="top">
				<span className="logo">Zen Huzaini</span>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<li>
						<DashboardIcon className="icon" />
						<span>Dashboard</span>
					</li>

					<p className="title">LISTS</p>

					<li>
						<AccountCircleIcon className="icon" />
						<span>Users</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Products</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Delovery</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Notification</span>
					</li>

					<p className="title">USER</p>

					<li>
						<DashboardIcon className="icon" />
						<span>Setting</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<DashboardIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div className="colorOption"></div>
				<div className="colorOption"></div>
			</div>
		</div>
	);
};

export default Sidebar;
