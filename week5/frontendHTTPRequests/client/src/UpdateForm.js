export default function UpdateForm(props) {
    return(
        <div>
            <input type="text" id={`upTask${props.count}`} placeholder="Enter updated task"></input>
            <input type="text" id={`upDesc${props.count}`} placeholder="Enter updated description"></input>
            <button onClick={() => {props.updateEntry(props.id, document.querySelector(`#upTask${props.count}`).value, document.querySelector(`#upDesc${props.count}`).value)}}>Update</button>
        </div>
    );
}