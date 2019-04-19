import React, { Component } from 'react'
import './employee.css'

export default class EmployeeDetail extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <React.Fragment>
                <section className="employee">
                    <div key={this.props.employee.id} className="card">
                        <div className="card">
                            <h4 className="card-title">
                                {this.props.employee.name}
                            </h4>
                            <button onClick={
                                () => {
                                    this.setState(
                                        { saveDisabled : true },
                                        () => this.props.fireEmployee("employees", this.props.employee.id)
                                    )
                                }
                            }
                                disabled={this.state.saveDisabled}
                                className="card-link">Fire</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }

}