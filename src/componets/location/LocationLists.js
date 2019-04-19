import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                <article className="wrapper">
                    {
                        this.props.locations.map(location =>
                            <div key={location.id}>
                                {location.name}
                                {location.address}
                            </div>
                        )
                    }
                </article>
            </React.Fragment>
        );
    }
}
