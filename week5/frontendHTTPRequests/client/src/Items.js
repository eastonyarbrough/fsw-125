import UpdateForm from './UpdateForm.js'

export default function Items(props) {
    let count = 0
    return(
        props.list.map(e => {
            count++
            return(
                <div className="entryDiv">
                    <div>
                        <h1>{e.name}</h1>
                        <h3>{e.desc}</h3>
                        <h3>{`Quantity: ${e.quan}`}</h3>
                        <h3>{`Unit Price: ${e.ppu}`}</h3>
                    </div>
                    <button onClick={() => {
                        props.deleteEntry(e._id)
                    }}>Delete</button>
                    <UpdateForm
                        id = {e._id}
                        count = {count}
                        updateEntry = {props.updateEntry}
                    />
                </div>
            )
        })
    )
}