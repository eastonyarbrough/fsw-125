export default function UpdateForm(props) {
    return(
        <div>
            <input type="text" id={`upItem${props.count}`} placeholder="Enter updated item"></input>
            <input type="text" id={`upDesc${props.count}`} placeholder="Enter updated description"></input>
            <input type="number" id={`upQuan${props.count}`} placeholder="Enter updated quantity"></input>
            <input type="number" id={`upPpu${props.count}`} placeholder="Enter updated unit price"></input>
            <button onClick={() => {
                props.updateEntry(
                    props.id,
                    document.querySelector(`#upItem${props.count}`).value,
                    document.querySelector(`#upDesc${props.count}`).value,
                    document.querySelector(`#upQuan${props.count}`).value,
                    document.querySelector(`#upPpu${props.count}`).value
                );
                props.rerender();
            }}>Update</button>
        </div>
    );
}