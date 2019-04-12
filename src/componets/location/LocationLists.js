import React, { Component } from 'react'
import "./location.css"



export default class LocationLists extends Component { 
   render() {
       return (

          
              <section className = "content">
              
              <h1 className ="style">Location Lists</h1>
                <section className= "locations">
                {this.props.locations.map(location =>
                  <div key={location.id}>
                 <p className="location">
                 {location.name}
                 
                 {location.address}
                 </p>
                 </div>
                 )}
                 </section>
              </section>
                                                                         
       

       );
    }
}



