import React, { Component } from 'react'

export default class LocationDetail extends Component {
    state = {
        saveDisabled: false
    }
    render() {
        return (
            <React.Fragment>
                <section className="location">
                    <div key={this.props.location.id} className="card">
                        <h4 className="card">
                            {this.props.location.name}
                        </h4>
                        <h6 className="card-title">
                            {this.props.location.address}
                        </h6>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}