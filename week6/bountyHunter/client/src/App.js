import {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid'
import Items from './Items.js';
import AddItem from './AddItem.js'
import Searchbar from './Searchbar.js'
import './App.css';

function App() {
  const [intake, setIntake] = useState([]);

  useEffect(() => {
    fetch('/items')
      .then(res => res.json())
      .then(res => setIntake(res))
      .catch(err => console.log(err))
  }, []);

  const postNew = async () => {
    await fetch('/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.querySelector("#item").value,
        desc: document.querySelector("#desc").value,
        quan: document.querySelector("#quan").value,
        ppu: document.querySelector("#ppu").value,
        _id: uuid()
      })
    });
  }

  const deleteEntry = id => {
    fetch(`/items/${id}`, {
      method: 'DELETE'
    })
  }

  const updateEntry = (id, item, desc, quan, ppu) => {
    fetch(`/items/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item,
        desc: desc,
        quan: quan,
        ppu: ppu
      })
    })
  }

  const rerender = () => {
    fetch('/items')
        .then(res => res.json())
        .then(res => setIntake(res))
        .catch(err => console.log(err))
  }

  const search = (query) => {
    fetch(`/items/search?name=${query}`)
        .then(res => res.json())
        .then(res => setIntake(res))
        .catch(err => (console.log(err)))
  }

  return (
    <>
      <Searchbar
        search = {search}
        rerender = {rerender}
      />
      <AddItem
        postNew = {postNew}
        rerender = {rerender}  
      />
      <div id="listFlex">
        <Items 
          list = {intake}
          deleteEntry = {deleteEntry}
          updateEntry = {updateEntry}
          rerender = {rerender}
        />
      </div>
    </>
  );
}

export default App;
