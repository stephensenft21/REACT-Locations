import React, { Component } from "react";

export default class OwnerList extends Component {
  render() {
    return (
      <section className="content owners">
        <h1 className ="style">Owner Lists</h1>
        {this.props.owners.map(owner => (
          <div key={owner.id} className="card">
            <div className="card-body">
              <h5 className="class-title">
              <p>{owner.name}</p>
                <button
                  onClick={() => this.props.deleteOwner(owner.id)}
                  className="card-link"
                >
                  Delete
                </button>
              </h5>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
