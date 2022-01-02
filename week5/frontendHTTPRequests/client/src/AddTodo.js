export default function AddTodo(props) {
    const resetInputs = () => {
        document.querySelector("#task").value = "";
        document.querySelector("#desc").value = "";
    }

    return(
        <div id="newForm">
            <div>
                <input type="text" id="task" placeholder="Please enter task name" required></input>
            </div>
            <div>
                <input type="text" id="desc" placeholder="Please enter description" required></input>
            </div>
            <button onClick={() => {
                props.postNew();
                resetInputs();
            }}>Submit</button>
        </div>
    );
}