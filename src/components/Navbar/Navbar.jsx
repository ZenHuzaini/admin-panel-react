import React, { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ChatIcon from "@mui/icons-material/Chat";
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkmodeContext";

const Navbar = () => {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className="navbar">
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search.." /> <SearchIcon />
				</div>

				<div className="items">
					<div className="item">
						<LanguageIcon className="icon" style={{ marginRight: "2px" }} /> English
					</div>
					<div className="item">
						<CircleNotificationsIcon className="icon" />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<DarkModeIcon
							className="icon"
							onClick={() => {
								dispatch({ type: "TOGGLE" });
							}}
						/>
					</div>
					<div className="item">
						<ChatIcon className="icon" />
					</div>
					<div className="item">
						<img
							src="https://yt3.ggpht.com/ytc/AMLnZu9-ITj0zq0kQyYJit4BP5EH4o10kANOSXuLV5bRpd0=s900-c-k-c0x00ffffff-no-rj"
							alt=""
							className="avatar"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
