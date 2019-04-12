
import React, { Component } from 'react'

export default class EmployeeList extends Component {
 
render(){ 
    return (
        <section className = "content">
        <h3 className = "style">Employee List</h3>
        <section className ="employees">
        {this.props.employees.map(employee => 
        <div key={employee.id}>
                 <p className = "employee">{employee.name}</p>         
        </div>)}
        </section>
        </section>
    )
        }

    }