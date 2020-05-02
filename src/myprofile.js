import React,{Component} from 'react';
import './App.css';
import Data from './data/data.json';
//import { Route } from 'react-router-dom';
 //let Myprofile=()=>{
     //return(
         //<div>
             //<h4>myprofile content</h4>
         //</div>
     //)
 //}
 //export default Myprofile;
 class Myprofile extends Component{
     render(){
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
         return(
             <section className="parent" text-color="rgb(27, 3, 83)">
                 <div className="card">
                     <div className="card-top">
                         <h3>{specificProfile.basicInformation.name}</h3>
                         <h3><em>{specificProfile.basicInformation.role}</em></h3>
                
                     </div>
                     <div className="card-bottom">
                     <a href={"mailto:"+specificProfile.basicInformation.email}>
            {specificProfile.basicInformation.email}</a><br />
            
          <a href={"tel:"+specificProfile.basicInformation.mobile}>
            {specificProfile.basicInformation.mobile}</a>
                     </div>
                 </div>
                 <div className="card2">
                    <div className="card-bottom">
                        <h7>Educational Qualifications</h7>
                    </div>
                    <div className="card-top">
                        {specificProfile.education.map((i,j)=>(
                            <ul>
                            <li>{i.degree}</li>
                            <p>{i.institution}</p>
                            </ul>
                        ))}
                        <div className="card-bottom">
                            <h7>Skills</h7>
                        </div>
                        <div className="card-top">
                        {specificProfile.Skills.map((i=>
                            <ul>
                            <li>{i}</li>
            
                            </ul>
                        ))}
                        <div className="card-bottom">
                            <h7>Summery</h7>
                        </div>
                        <div className="card-top">
                        {specificProfile.Summery.map((i=>
                            <ul>
                            <li>{i}</li>
            
                            </ul>
                        ))}
                        </div>
                        </div>
                    </div>

                 </div>
             </section>
         )
     }
 }
 export default Myprofile;