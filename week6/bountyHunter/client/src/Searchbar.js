export default function Searchbar(props) {
    return(
        <div>
            <input type="text" id="searchbar" placeholder="Enter item name to search"></input>
            <button onClick={() => props.search(document.querySelector("#searchbar").value)}>Search</button>
            <button onClick={() => props.rerender()}>Get All Items</button>
        </div>
    )
}