import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <article className="wrapper">
                <h1>Employee List</h1>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {employee.name}
                                    <button
                                        onClick={() => this.props.fireEmployee("employees", employee.id)}
                                        className="card-link">Fire</button>
                                </h5>
                            </div>
                        </div>
                    )
                }
            </article>
        );
    }
}

