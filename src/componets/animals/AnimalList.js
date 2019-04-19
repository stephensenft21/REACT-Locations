import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import dog from './DogIcon.svg'
import './animal.css'

export default class AnimalList extends Component {
    render() {
        return (
            <article className="content animals wrapper">
                <h1>Animal List</h1>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={dog} className="icon--dog" alt = "dog-icon"/>
                                    {animal.name}
                                    <Link className = "nav-link" to= {`/animals/${animal.id}`}>Details</Link>
                                    <button
                                        onClick={() => this.props.deleteAnimal("animals", animal.id)}
                                        className="card-link">Delete</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </article>
        );
    }
}