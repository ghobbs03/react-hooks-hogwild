import Hog from "./Hog"

function HogTileList({hogs}) {
    const hogList = hogs.map((hog,index) => {
        return (<Hog className="ui eight wide column" key={index} name={hog.name} image={hog.image} specialty={hog.specialty} greased={hog.greased} highestmedal={hog["highest medal achieved"]} />)
    })

    return (<div className="ui grid container">{hogList}</div>)

}

export default HogTileList;