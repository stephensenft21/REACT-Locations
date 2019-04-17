import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationLists'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import AnimalManager from '../module/AnimalManager'
import EmployeeManager from '../module/EmployeeManager';
import LocationManager from '../module/LocationManager';
import OwnerManager from '../module/OwnerManager'
import AnimalDetail from './animals/AnimalDetails'
import LocationDetail from './location/LocationDetails'
import EmployeeDetail from './employee/EmployeeDetails'
import OwnerDetail from './owner/OwnerDetails'
export default class ApplicationViews extends Component {
    
  

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }

    componentDidMount() {
        const newState = {}
    
        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
        EmployeeManager.getAll()
            .then(employees => newState.employees = employees)
        LocationManager.getAll()
            .then(locations => newState.locations = locations )
        OwnerManager.getAll()
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))


    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }


    deleteEmployee = id => {
        return fetch(`http://localhost5002/employees/${id}`,{
        method: "DELETE"
})
  .then(e => e.json())
  .then(() => fetch (`http://localhost:5002/employees`))
  .then(e => e.json())
  .then(employees => this.setState({
         employees: employees
  }

  ))
    }


    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`,{
            method: "DELETE" 
           })
           .then(e=> e.json())
           .then(() => fetch(`http://localhost:5002/owners`))
           .then(e=> e.json())
           .then(owners => this.setState({
               owners: owners
           }) )
           
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals} />
                }} />

                <Route path="/animals/:animalId(\d+)" render={(props) =>{
                    let animal = this.state.animals.find(animal =>
                       animal.id === parseInt(props.match.params.animalId) )
               
                if (!animal) {
                    animal ={ id:404, name: "404", breed: "Dog not found"}
                }   
                return <AnimalDetail animal= {animal} 
                deleteAnimal={this.deleteAnimal}/>
                    }} />


                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} 
                    employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeId(\d+)" render={(props) => {
                    let employee = this.state.employee.find(employee => employee.id
                        === parseInt(props.match.params.employeeId))
                        if(!employee) {
                            employee = {id:404, name: "404", }
                        }
                }

                <Route path = "/owners" render = {(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner}
                    owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

