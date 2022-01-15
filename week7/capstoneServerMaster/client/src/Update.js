export default function Update(props) {
    return(
        <div id="updateInputs">
            <h3 className="addAsset" style={{color: 'whitesmoke'}}>Update a listing</h3>
            <input type="text" placeholder="Enter Vehicle Product ID" id="prodID" className="addAsset"></input>
            <input type="text" placeholder="Update vehicle make" id="upMake" className="addAsset"></input>
            <input type="text" placeholder="Update vehicle model" id="upModel" className="addAsset"></input>
            <input type="text" placeholder="Update vehicle year" id="upYear" className="addAsset"></input>
            <input type="text" placeholder="Update vehicle type" id="upType" className="addAsset"></input>
            <input type="text" placeholder="Update vehicle price" id="upPrice" className="addAsset"></input>
            <input type="text" placeholder="Update Image URL Exterior" id="upExteriorURL" className="addAsset"></input>
            <input type="text" placeholder="Update Img URL Interior(F)" id="upIntFrontURL" className="addAsset"></input>
            <input type="text" placeholder="Update Img URL Interior(R)" id="upIntRearURL" className="addAsset"></input>
            <button onClick={() => props.updateCar(document.querySelector("#prodID").value, {
                make: document.querySelector("#upMake").value,
                model: document.querySelector("#upModel").value,
                year: document.querySelector("#upYear").value,
                type: document.querySelector("#upType").value,
                price: document.querySelector("#upPrice").value,
                imgUrls: [
                    document.querySelector("#upExteriorURL").value,
                    document.querySelector("#upIntFrontURL").value,
                    document.querySelector("#upIntRearURL").value
                ]
            })} className="searchBtn">Submit</button>
        </div>
    )
    
}