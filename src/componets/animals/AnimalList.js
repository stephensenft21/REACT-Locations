import React, { Component } from 'react'





export default class AnimalList extends Component {
   render(){ 
       return (
           <section className = "content">
           <h3 className ="style">Animals list</h3>
           <section className ="animals">
           {this.props.animals.map(animal => 
           <div key={animal.id}> 

                   <p className ="border">{animal.name}</p>          
           </div>)}
           </section>
           </section>
       )
   }




}