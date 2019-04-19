import React, {Component} from "react"
import "./owner.css" 
import owner from "./ownerIcon.png"

export default class OwnerDetail extends Component {
    state = {
        saveDisabled: false

    }
    render(){
        return(
             <section className="owner">
           <div key={ this.props.owner.id } className="card">
                <div className="card-body">
                    <h4 className="card-title">
                    <img src={ owner } className="icon--owner" />
                        { this.props.owner.name }
                    </h4>
                    <h6 className="card-title">{ this.props.owners }</h6>
                   
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