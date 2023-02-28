import { useState } from "react";

function Hog({name, image, specialty, greased, highestmedal}) {
    const [isClicked, setIsClicked] = useState(false);

    const otherDetails =  <div className="normalText">
        <p>Specialty: {specialty}<br />{greased ? "Greased" : "Not Greased"}<br />Highest Medal: {highestmedal.charAt(0).toUpperCase() + highestmedal.slice(1)}</p>
        </div>;

    function displayDetails() {
        setIsClicked(!isClicked);
    }

    return (<div className="pigTile" onClick={() => displayDetails()}>
        <img src={image} className="minPigTile" />
        <h3>{name}</h3>
        {isClicked ? otherDetails : ""}
    </div>)

}

export default Hog;