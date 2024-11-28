// import './App.css'

import Features from "./Features";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Products from "./Products";
import ScrollableList from "./Products/ScrollableList";
import UseCases from "./UseCases";

function App() {
	return(
		<div className='h-full flex flex-1 flex-col items-center justify-center'>
			<Navbar />
			{/* <div className="flex w-full flex-col items-center justify-center bg-slate-900">
				
			</div> */}
			<Intro />
			<Features />
			<Products />
			<ScrollableList />
			<UseCases />
			<Footer />
		</div>
	);
}

export default App;
