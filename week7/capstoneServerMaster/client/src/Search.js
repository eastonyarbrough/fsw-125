export default function Search(props) {
    const resetInputs = () => {
        document.querySelector("#search").value = "";
        document.querySelector("#searchID").value = "";
    }

    return(
        <div>
            <div className="searchDiv">
                <input type="text" placeholder="Enter vehicle type (SUV, Coupe, etc.)" id="search"></input>
                <button onClick={() => {
                    props.search(document.querySelector("#search").value);
                    resetInputs();    
                }} className="searchBtn">Search</button>
                <button onClick={() => props.rerender()} className="searchBtn">Reset</button>
            </div>
            <div className="searchDiv">
                <h2>OR</h2>
            </div>
            <div className="searchDiv">
                <input type="text" placeholder="Enter vehicle product ID" id="searchID"></input>
                <button onClick={() => {
                    props.getOne(document.querySelector("#searchID").value);
                    resetInputs();    
                }} className="searchBtn">Search</button>
                <button onClick={() => props.rerender()} className="searchBtn">Reset</button>
            </div>
        </div>
    )
}