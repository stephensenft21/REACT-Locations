import React, { Component} from 'react'


export default class OwnerList extends Component 
{
    render(){
        return ( <section className = "content">
                 <h3 className = "style">Owner List</h3>
                 {this.props.owners.map(owner =>
                    <div key={owner.id}>
                    
                    <p className= "">{owner.name}</p>

                    </div>)}


        </section>

        )
    }
}