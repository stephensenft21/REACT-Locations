import React, { Component } from "react";

export default class EmployeeList extends Component {
  render() {
    return (
        <section className="content employees">
          <h1 className ="style"> Employee Lists</h1>
        {
            this.props.employees.map(employee =>
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {employee.name}
                            <button
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Delete</button>
                        </h5>
                    </div>
                </div>
            )
        }
        </section>
    );
  }
}

