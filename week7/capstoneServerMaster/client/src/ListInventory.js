import { useContext } from 'react';
import { DataContext } from './App.js';

export default function ListInventory(props) {
    const data = useContext(DataContext);

    return(
        data.map(e => {
            return(
                <div className="entryDiv">
                    <div className="carStats">
                        <h2>{`${e.year} ${e.make} ${e.model} ${e.type}`}</h2>
                        <h2>{`$${e.price}`}</h2>
                        <h3>{`Product ID: ${e._id}`}</h3>
                        <div className="deleteDiv">
                            <button onClick={() => props.deleteEntry(e._id)} className="searchBtn">Delete</button>
                        </div>
                    </div>
                    <img src={e.imgUrls[0]} alt="exterior" className="carImg"></img>
                    <img src={e.imgUrls[1]} alt="front-interior" className="carImg"></img>
                    <img src={e.imgUrls[2]} alt="rear-interior" className="carImg"></img>
                </div>
            )
        })
    )
}