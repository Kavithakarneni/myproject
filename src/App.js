import React from 'react';
import "./App.css";
import Data from './data/data.json';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Myprofile from './myprofile.js';

function App(){
  var info=Data.profiles;
    return(
      <section>
      <BrowserRouter>
      <Route exact path="/myprofile" component={Myprofile}/>
        <Route exact path="/" component={Home}/>
        <header className="header">
          {info.map(l=>(
        <Link to={{pathname:"/myprofile",data:{id:l}}} key={l}>{Myprofile}</Link>
        ))}
        </header>
        </BrowserRouter>
        
      
      </section>
    )
  }
  let Home=()=>{
    var info=Data.profiles;
    return(
      <section className="parent">
        {info.map((i,index)=>(
        <div className="card" key={index}>
          <div className="card-top">
          <h2> {i.basicInformation.name}</h2><br />
          <h5> <em>{i.basicInformation.role}</em></h5>
        </div>

        <div className="card-bottom">
            <Link to={{pathname:"/myprofile",data:{id:index}}}>view profiles>></Link>
        </div>
        </div>
      ))}

      </section>
    )
  }

export default App;