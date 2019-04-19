import React, { Component } from 'react'
import './owners.css'

export default class OwnersList extends Component {
    render() {
        return (
            <article className="content wrapper">
                <h1>Owners List</h1>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <h5 className="card-body">
                                {owner.name}
                                <button
                                    onClick = {() => this.props.removeClient("owners", owner.id)}
                                    className = "card-link">Remove Client</button>
                            </h5>
                        </div>
                    )
                }
            </article>
        )
    }
}