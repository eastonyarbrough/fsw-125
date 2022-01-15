export default function PostNew(props) {
    return(
        <div id="menuInputs">
            <img src={require('./images/closeMenu.png')} alt="closeMenu" onClick={() => props.closeMenu()} id="closeMenu"></img>
            <h3 className="addAsset" style={{color: 'whitesmoke'}}>List your car!</h3>
            <input type="text" placeholder="Please enter vehicle make" id="make" className="addAsset"></input>
            <input type="text" placeholder="Please enter vehicle model" id="model" className="addAsset"></input>
            <input type="text" placeholder="Please enter vehicle year" id="year" className="addAsset"></input>
            <input type="text" placeholder="Please enter vehicle type" id="type" className="addAsset"></input>
            <input type="text" placeholder="Please enter vehicle price" id="price" className="addAsset"></input>
            <input type="text" placeholder="Image URL Exterior" id="exteriorURL" className="addAsset"></input>
            <input type="text" placeholder="Image URL Interior (Front)" id="intFrontURL" className="addAsset"></input>
            <input type="text" placeholder="Image URL Interior (Rear)" id="intRearURL" className="addAsset"></input>
            <label className="addAsset" id="selectLabel">Is vehicle located here?</label>
            <select id="onLot" className="addAsset">
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button onClick={() => props.postCar({
                make: document.querySelector("#make").value,
                model: document.querySelector("#model").value,
                year: document.querySelector("#year").value,
                type: document.querySelector("#type").value,
                onLot: document.querySelector("#onLot").value,
                price: document.querySelector("#price").value,
                imgUrls: [
                    document.querySelector("#exteriorURL").value,
                    document.querySelector("#intFrontURL").value,
                    document.querySelector("#intRearURL").value
                ]
            })} className="searchBtn">Submit</button>
        </div>
    )
    
}