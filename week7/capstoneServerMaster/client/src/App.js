import { useState, useEffect, createContext } from 'react';
import ListInventory from './ListInventory.js'
import Search from './Search.js'
import PostNew from './PostNew.js'
import Update from './Update.js'
import './App.css';

export const DataContext = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/inventory')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err.response.data.errMsg))
  }, []);

  const search = (query) => {
    fetch(`/inventory/search/type?type=${query}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err.response.data.errMsg))
  }

  const rerender = () => {
    fetch('/inventory')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err.response.data.errMsg))
  }

  const openMenu = () => {
    const icon = document.querySelector("#addNew");
    const menu = document.querySelector("#menu");
    icon.style = "display: none";
    menu.style = "display: flex";
  }

  const closeMenu = () => {
    const icon = document.querySelector("#addNew");
    const menu = document.querySelector("#menu");
    icon.style = "display: inline";
    menu.style = "display: none";
  }

  const postCar = async (object) => {
    await fetch('/inventory', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    rerender();
  }

  const updateCar = (id, object) => {
    fetch(`/inventory/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(object)
    })
    rerender();
  }

  const deleteEntry = id => {
    fetch(`/inventory/${id}`, {
      method: 'DELETE'
    })
    rerender();
  }

  const getOne = id => {
    fetch(`/inventory/${id}`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <>
    <img src={require('./images/addNew.png')} alt="addMenu" id="addNew" onClick={() => openMenu()}></img>
    <div style={{display: 'none'}} id="menu">
      <PostNew closeMenu = {closeMenu} postCar = {postCar}/>
      <Update updateCar = {updateCar}/>
    </div>
    <header id="hdr">
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <h1 style={{color: 'whitesmoke'}}>Easton's Car Emporium</h1>
      </div>
    </header>
    <Search search = {search} getOne = {getOne} rerender = {rerender}/>
    <main>
      <DataContext.Provider value={data}>
        <ListInventory deleteEntry = {deleteEntry}/>
      </DataContext.Provider>
    </main>
    </>
  );
}

export default App;
