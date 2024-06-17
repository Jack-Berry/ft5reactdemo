import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <ul>
          {this.props.li.map((li) => {
            return <li>{li.entry}</li>;
          })}
        </ul>
        <ul>
          {this.props.li.map((li) => {
            return <li>{li.data}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Section;
