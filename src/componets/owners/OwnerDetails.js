import React, {Component} from "react"
import "./owner.css" 


export default class Owners extends Component {
    state = {
        saveDisabled: false

    }
    render(){
        return(
             <section className="employee">
            <div key={ this.props.employee.id } className="card">
                <div className="card-body">
                    <h4 className="card-title">
                        
                        { this.props.owner.name }
                    </h4>
                    <h6 className="card-title">{ this.props.owner }</h6>
                    <button onClick={
                            () => {
                                this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteOwner(this.props.owner.id)
                                )
                            }
                        }
                        disabled= { this.state.saveDisabled }
                        className="card-link">Delete</button>
                </div>
            </div>
        </section>
        )
    }
}