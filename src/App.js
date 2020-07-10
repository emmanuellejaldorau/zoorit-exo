import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import logo from './images/logo-ladress.svg';
import SquareThumbnail from './SquareThumbnail';
import RoundThumbnail from './RoundThumbnail';

function App() {
  const initialData = [
    {block_title:"", links:[{title:"", url:"", thumbnail:""}]},
    {block_title:"", links:[{title:"", url:"", thumbnail:""}]}
  ]
  const [data, setData] = useState(initialData);

  const fetchData = async () =>{
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://cdn.zoo-host.com/intehtml/';
    let response = await axios(proxyurl + url)
    setData(response.data.blocks);
    console.log("happening", response.data.blocks);

  }

  const getBlockTitle = (title) => {
    return title.includes("immanquables") ? title : 
      <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
        <p style={{marginRight: '15px'}}>{title.substring(0,13)}</p> 
        <img height='30px' src={logo} />
      </div>;
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <div className="main">
         {data.map((x, i) => {
          return <div className={`mainLine${i}`} key={i} >
            <h2>{getBlockTitle(x.block_title)}</h2>
            <div className="thumbnailsLine">
              {x.links ? x.links.map((y,j) => <RoundThumbnail key={j} elt={y}/>)
                : x.posts.map((z,k) => <SquareThumbnail key={k} elt={z}/>)
              }
            </div> 
          </div>
        })}
      </div>
      <div className="bottom"> 
      </div>
    </>
  );
}

export default App;
