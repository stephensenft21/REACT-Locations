import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import ResourceManager from '../modules/ResourceManager'
import AnimalDetail from './animals/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import LocationDetail from './location/LocationDetail'

class ApplicationViews extends Component {
    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: []
    }
    componentDidMount() {
        const newState = {}

       ResourceManager.getAll("animals")
            .then(animals => newState.animals = animals)
            .then(() =>ResourceManager.getAll("locations"))
            .then(locations => newState.locations = locations)
            .then(() =>ResourceManager.getAll("employees"))
            .then(employees => newState.employees = employees)
            .then(() =>ResourceManager.getAll("owners"))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }
    deleteAnimal = (obj, id) =>ResourceManager.delete(obj, id)
        .then(() =>ResourceManager.getAll("animals"))
        .then(animals => {
            this.props.history.push("/animals")
            this.setState({ animals: animals })
        })
    fireEmployee = (obj, id) =>ResourceManager.delete(obj, id)
        .then(() =>ResourceManager.getAll("employees"))
        .then(employees => {
            this.props.history.push("/employees")
            this.setState({ employees: employees })
        })
    removeClient = (obj, id) =>ResourceManager.delete(obj, id)
        .then(() =>ResourceManager.getAll("owners"))
        .then(owners => {
            this.props.history.push("/owners")
            this.setState({ owners: owners })
        })

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )

                    if (!location) {
                        location = { id: 404, name: "404", address: "Location Not Found" }
                    }
                    return <LocationDetail location={location} />

                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal}
                        animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )

                    if (!animal) {
                        animal = { id: 404, name: "404", breed: "Dog Not Found" }
                    }

                    return <AnimalDetail animal={animal}
                        deleteAnimal={this.deleteAnimal} />

                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList fireEmployee={this.fireEmployee}
                        employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    if (!employee) {
                        employee = { id: 404, name: "404 Employee Not Found" }
                    }
                    return <EmployeeDetail employee={employee}
                        fireEmployee={this.fireEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnersList removeClient={this.removeClient}
                        owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default withRouter (ApplicationViews)