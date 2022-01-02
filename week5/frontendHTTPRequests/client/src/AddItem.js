export default function AddItem(props) {
    const resetInputs = () => {
        document.querySelector("#item").value = "";
        document.querySelector("#desc").value = "";
        document.querySelector("#quan").value = "";
        document.querySelector("#ppu").value = "";
    }

    return(
        <div id="newForm">
            <div>
                <input type="text" id="item" placeholder="Please enter item name" required></input>
            </div>
            <div>
                <input type="text" id="desc" placeholder="Please enter description" required></input>
            </div>
            <div>
                <input type="number" id="quan" placeholder="Please enter quantity" required></input>
            </div>
            <div>
                <input type="number" id="ppu" placeholder="Please enter unit price" required></input>
            </div>
            <button onClick={() => {
                props.postNew();
                resetInputs();
            }}>Submit</button>
        </div>
    );
}