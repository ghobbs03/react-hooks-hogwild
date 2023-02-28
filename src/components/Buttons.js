function Buttons({onNameSort, onWeightSort, showGreased}) {

    
    return (<div>
        <button onClick={showGreased}>Greased Hogs</button><button onClick={() => onNameSort()}>Sort By Name</button><button onClick={() => onWeightSort()}>Sort By Weight</button>
    </div>)


}

export default Buttons;