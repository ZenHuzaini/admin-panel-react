import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { producInputs, userInputs } from "./datasources/form";

import "./style/dark.scss";


function App() {
	return (
		<div className="App dark">
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index element={<Home />} />
						<Route path="login" element={<Login />} />
						<Route path="users">
							<Route index element={<List />} />
							<Route path=":userId" element={<Single />} />
							<Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
						</Route>
						<Route path="products">
							<Route index element={<List />} />
							<Route path=":productId" element={<Single />} />
							<Route path="new" element={<New inputs={producInputs} title="Add New Product" />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
