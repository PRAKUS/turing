import "./style/App.css";
import "./style/mobile.css";
import Home from "./pages/Home";
import Navigation from "./component/Navigation";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogReader from "./pages/blogReader";
import Industry from "./pages/industry";
import Services from "./pages/services";
import ErrorPage from "./pages/Page404";
import FAQ from "./pages/FAQ";
import Footer from "./component/Footter";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
	window.scrollTo(0, 0);
	const url = "http://localhost:1337/blogs/";
	const [blog, setBlog] = useState(null);
	useEffect(() => {
		axios.get(url).then((response) => {
			setBlog(response.data);
		});
	}, []);

	if (blog) {
		sessionStorage.setItem("blog", JSON.stringify(blog));
	}

	return (
		<div>
			<Router>
				<Navigation />
				<main>
					<Switch>
						<Route path='/' exact component={Home} />

						<Route path='/home' component={Home} />
						<Route path='/about' component={About} />
						<Route path='/industry' component={Industry} />
						<Route path='/services' component={Services} />
						<Route path='/faq' component={FAQ} />

						<Route path='/blogs' exact component={Blogs} />
						<Route component={Blogs}>
							<Route path='/:id' children={BlogReader} />
						</Route>
						<Route component={ErrorPage} />
					</Switch>
				</main>

				<footer>
					<Footer></Footer>
				</footer>
			</Router>
		</div>
	);
}

export default App;
