import React from "react";
import Nav from "./Nav";
import HogTileList from "./HogTileList";
import Buttons from "./Buttons";

import { useState } from "react";
import hogs from "../porkers_data";


function App() {
	const [hogsArray, setHogsArray] = useState(hogs);
	const [isFiltered, setIsFiltered] = useState(false);

	function onNameSort() {
		setHogsArray([...hogsArray].sort((hog1, hog2) => ((hog1.name).localeCompare(hog2.name))));
	}

	function onWeightSort() {
		setHogsArray([...hogsArray].sort((hog1,hog2) => (hog1.weight - hog2.weight)));
	}

	function showGreased(event){
		if (isFiltered === false ) {
			event.target.textContent = "All Hogs";
			setHogsArray(hogs.filter((hog) => (hog.greased === true)));
		} else {
			event.target.textContent = "Greased Hogs";
			setHogsArray(hogs);
		}
		
		setIsFiltered(!isFiltered);
	}

	return (
		<div className="App">
			<Nav />
			<Buttons onNameSort={onNameSort} onWeightSort={onWeightSort} showGreased={showGreased}/>
			<HogTileList className="ui eight wide column" hogs={hogsArray} />
		</div>
	);
}

export default App;
