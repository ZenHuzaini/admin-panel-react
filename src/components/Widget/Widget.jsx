import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
	let data;
	const tempAmount = Math.floor(Math.random() * 500);

	switch (type) {
		case "user":
			data = {
				isMoney: false,
				title: "USERS",
				link: "view all users",
				icon: <PersonOutlineIcon className="icon" />,
			};
			break;
		case "order":
			data = {
				isMoney: false,
				title: "ORDERS",
				link: "view all orders",
				icon: <ShoppingCartOutlinedIcon className="icon" style={{backgroundColor: "rgba(210, 0, 225, 0.649)"}} />,
			};
			break;
		case "earning":
			data = {
				isMoney: true,
				title: "EARNING",
				link: "view all earnings",
				icon: <AttachMoneyOutlinedIcon className="icon" style={{backgroundColor: "rgba(15, 225, 0, 0.321)", color: "green"}} />,
			};
			break;
		case "balance":
			data = {
				isMoney: true,
				title: "BALANCE",
				link: "view all earnings",
				icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{backgroundColor: "rgba(225, 0, 26, 0.304)", color: "red"}}/>,
			};
			break;
		default:
			break;
	}
	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="counter">
					{data.isMoney && "$"} {tempAmount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpIcon />
					20%
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
